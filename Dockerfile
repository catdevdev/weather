FROM node:lts


RUN apt-get update && apt-get install -y python3 python3-pip

RUN npm install -g yarn


WORKDIR /app



RUN mkdir -p /app/weather-app
RUN mkdir -p /app/weather-server
RUN mkdir -p /app/weather-algo
RUN mkdir -p /app/prisma

ADD package.json yarn.lock ./
ADD weather-app/package.json ./weather-app
ADD weather-server/package.json ./weather-server
ADD prisma ./prisma

RUN yarn install
RUN yarn pip

COPY . .

RUN yarn prisma-migrate-node
RUN yarn prisma-migrate-python
RUN yarn build

CMD ["yarn", "start"]
