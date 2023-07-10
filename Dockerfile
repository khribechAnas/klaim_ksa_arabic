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
ENV NEXT_PUBLIC_APP_NAME klaim_website
ENV NEXT_PUBLIC_STRAPI_ENDPOINT https://strapi.klaim.ai
ENV NEXT_PUBLIC_STRAPI_API_ENDPOINT https://strapi.klaim.ai/api
ENV NEXT_PUBLIC_STRAPI_TOKEN 3bcb1f76988ca0415a93c4093d0365e5ee11e67c4675d282f34e7d46d4f1fb220e110dce258e618ee030b333f95bc696395bc395856eda80a47f374491e46a381e05bc82dfa570f9c586b92e23682bda75c7ce8f05414f789df8a30faa4b6132efed7723ddeae8203224d7af255a2f37e6a2f780cd7d5cd07b4fa56b13961b13

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
