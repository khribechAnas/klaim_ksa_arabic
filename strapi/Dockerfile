FROM node:16-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /app

COPY package*.json ./

RUN npm install webpack
RUN npm ci

COPY . .