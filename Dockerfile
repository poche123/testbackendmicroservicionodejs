# Use Node.js base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the source code
COPY . .

# Build the React app
RUN npm run build

# Expose the server port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
