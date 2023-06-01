# Use an official Node.js runtime as a parent image
FROM node:14-alpine

ARG APP_NAME
ARG STRAPI_ENDPOINT
ARG STRAPI_API_ENDPOINT
ARG STRAPI_TOKEN

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]