# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Build-time arguments for env values
ARG KLAIM_LEGACY_API_URL
ARG KLAIM_LEGACY_API_KEY
ARG KLAIM_API_URL
ARG KLAIM_API_KEY
ARG NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST

# Expose them to the build step environment
ENV KLAIM_LEGACY_API_URL=${KLAIM_LEGACY_API_URL} \
    KLAIM_LEGACY_API_KEY=${KLAIM_LEGACY_API_KEY} \
    KLAIM_API_URL=${KLAIM_API_URL} \
    KLAIM_API_KEY=${KLAIM_API_KEY} \
    NEXT_PUBLIC_POSTHOG_KEY=${NEXT_PUBLIC_POSTHOG_KEY} \
    NEXT_PUBLIC_POSTHOG_HOST=${NEXT_PUBLIC_POSTHOG_HOST}

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 