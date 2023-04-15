# Use an official Node runtime as a parent image
FROM node:lts

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
# COPY package.json yarn.lock ./
COPY . .

# Install project dependencies
RUN yarn install

# Copy the entire project to the container
# COPY . .

# Build the project
RUN yarn build

# Set the default command to start the project
CMD ["yarn", "start"]
