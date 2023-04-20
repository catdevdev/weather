FROM node:lts


RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app

RUN mkdir -p /app/weather-app
RUN mkdir -p /app/weather-server
RUN mkdir -p /app/weather-algo
RUN mkdir -p /app/prisma

ADD package.json yarn.lock ./
ADD weather-app/package.json ./weather-app
ADD weather-server/package.json ./weather-server
ADD weather-algo/requirements ./weather-algo
ADD prisma ./prisma

RUN yarn install

SHELL ["/bin/bash", "-c", "source /app/weather-algo/venv/bin/activate"]
RUN pip install --no-cache-dir -r /app/weather-algo/requirements.txt

COPY . .



RUN yarn prisma-migrate-node
RUN yarn prisma-migrate-python
RUN yarn build

CMD ["yarn", "start"]
