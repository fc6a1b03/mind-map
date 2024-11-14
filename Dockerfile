FROM node:16 AS builder
WORKDIR /usr/src
COPY . .
RUN cd simple-mind-map && npm npm ci && npm link
RUN cd web && npm npm ci && npm link simple-mind-map && npm run build

# =============================================================

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /usr/src/index.html /usr/src/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
