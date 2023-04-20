FROM node:lts

WORKDIR /app


RUN mkdir -p /app/weather-app
RUN mkdir -p /app/weather-server
RUN mkdir -p /app/prisma

ADD package.json yarn.lock ./
ADD weather-app/package.json ./weather-app
ADD weather-server/package.json ./weather-server
ADD prisma ./prisma

RUN yarn install

COPY . .

RUN prisma-migrate-node
RUN prisma-migrate-python
RUN yarn build

CMD ["yarn", "start"]
