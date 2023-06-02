# Use an official Node.js runtime as a parent image
FROM node:14-alpine

ENV APP_NAME=klaim_website
ENV STRAPI_ENDPOINT=https://strapi.stg.klaim.ai
ENV STRAPI_API_ENDPOINT
ENV STRAPI_TOKEN

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