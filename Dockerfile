# Use an official Node.js runtime as a parent image
FROM node:14-alpine


# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .
ENV APP_NAME klaim_website
ENV STRAPI_ENDPOINT https://strapi.stg.klaim.ai
ENV STRAPI_API_ENDPOINT https://strapi.stg.klaim.ai/api
ENV STRAPI_TOKEN 4703b6805273a76fadad65749fe22254b9cf8a0187a37037a5d62270297610a9c1536006722fa7365e39698d715708bbd6196a4fd4d525d8ee321144a1089b182af7b86c2db009def0340e763c7fd1e58db3f072d8341e66ef238b0d178a7d2469b7199b08f1db40ae51575a449fe7ed7ddb5e2adb81c20619159681d453c808

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]