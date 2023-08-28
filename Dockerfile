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

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]