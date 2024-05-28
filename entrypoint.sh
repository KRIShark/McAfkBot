#!/bin/sh

# Create the settings.json file based on environment variables.
cat <<EOF > settings.json
{
    "settings": {
        "ip": "${IP:-localhost}",
        "port": ${PORT:-25565},
        "username": "${USERNAME:-Bot}",
        "auth": "${AUTH:-offline}"
    }
}
EOF

# Run the command passed as arguments to the entrypoint.
exec "$@"
