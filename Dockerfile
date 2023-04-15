# Use an official Node runtime as a parent image
FROM node:lts

# Set the working directory to /app
WORKDIR /app

RUN mkdir -p weather-app weather-server

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./
COPY weather-app/package.json ./weather-app
COPY weather-server/package.json ./weather-server

# Install project dependencies
RUN yarn install

# Copy the entire project to the container
COPY . .
# COPY . .

# Build the project
RUN yarn build

# Set the default command to start the project
CMD ["yarn", "start"]
