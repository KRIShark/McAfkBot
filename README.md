# Install

```
npm install
```

# Run

```
node index.js
```


# Docker Build

## Build the Container

docker build -t mcbots .

## Run the Docker container with the necessary environment variables:

docker run -e IP=your_ip -e PORT=your_port -e USERNAME=your_username -e AUTH=offline mcbots

# Ref

## lib used

https://github.com/PrismarineJS/mineflayer