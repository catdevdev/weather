# Use an official Node.js runtime as the base image
FROM node:lts

# Create and set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install
RUN yarn add @nestjs/cli -G

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

EXPOSE 9001

# Start the application in production mode
# CMD [ "yarn", "start:prod" ]
CMD [ "node", "dist/main.js" ]
