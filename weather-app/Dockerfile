# Use an official Node.js runtime as the base image
FROM node:lts

# Create and set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install

COPY . .

# Expose the application port
EXPOSE 9000

