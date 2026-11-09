podman run \
    --rm \
    --volume ./:/app \
    -p 8080:8080 \
    --workdir "/app" \
    node:26.13-alpine3.23 \
    npx -y @11ty/eleventy --serve