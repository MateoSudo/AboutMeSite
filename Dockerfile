# Use a lightweight base image
FROM mcr.microsoft.com/devcontainers/typescript-node:18

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker caching
COPY AboutMeSite/package*.json ./

# Copy the rest of the application files
COPY AboutMeSite/ .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
