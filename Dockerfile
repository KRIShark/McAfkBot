# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code, excluding node_modules as specified in .dockerignore.
COPY . .

# Copy the entrypoint script.
COPY entrypoint.sh /usr/src/app/entrypoint.sh

# Make the entrypoint script executable.
RUN chmod +x /usr/src/app/entrypoint.sh

# Define the entrypoint.
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# Default command to run your app.
CMD ["npm", "run", "run"]
