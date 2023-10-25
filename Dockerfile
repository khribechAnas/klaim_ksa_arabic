# Use an official Node.js runtime as a parent image
FROM node:16.17-alpine


# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .
ENV NEXT_PUBLIC_APP_NAME klaim_website
ENV NEXT_PUBLIC_STRAPI_TOKEN b22d2c0e5f3c64cec025aaa7417714e8d33cb12d7448322404221f289fb30c1e64cf2401719a70fa31c4237a19f20b9c5ee85031642b267152c4041033e3c917a5ffa68375c902e9640780e16e2b8d3ac281e54a1ec3c52369f978bbf5d53ff6929e51422c3ffb31b81406bc86979af3556412be0cdffe48f51f9efc9fa62bc3
ENV NEXT_PUBLIC_STRAPI_ENDPOINT https://strapi.stg.klaim.ai/api
ENV NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT https://strapi.stg.klaim.ai

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
