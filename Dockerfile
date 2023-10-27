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
ENV NEXT_PUBLIC_STRAPI_TOKEN a10c1afdf77441d37bbe49a7da4d1bbc5819927c88856d683f8e835da00d858c249d9ef6b3ee6811eaeb9c5800273c60d51bd44eb4f86af1abeddd2c5b70849aff3587dd67eb1440d225cbf10e0cf1dc3dc038b641b542622fe1cd3371695c9ccfe1bff009cf6b8e73021825c6017bf5ba7cec13bb84178c59af0b9c9d23856c
ENV NEXT_PUBLIC_STRAPI_ENDPOINT https://strapi.stg.klaim.ai/api
ENV NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT https://strapi.stg.klaim.ai

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
