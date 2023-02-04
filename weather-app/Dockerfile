# Use an official Node.js runtime as the base image
FROM node:16

# Create and set the working directory
RUN mkdir -p /app
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn clean & yarn cache clean & yarn

COPY . .

# Expose the application port
EXPOSE 9000

# Start the application
ENTRYPOINT [ "yarn" ]
