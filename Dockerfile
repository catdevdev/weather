FROM node:lts

WORKDIR /app


RUN mkdir -p /app/weather-app
RUN mkdir -p /app/weather-server

ADD package.json yarn.lock ./
ADD weather-app/package.json ./weather-app
ADD weather-server/package.json ./weather-server
ADD weather-server/prisma ./weather-server/prisma

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
