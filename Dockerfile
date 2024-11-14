FROM node:16 AS builder
WORKDIR /usr/src
COPY . .
RUN cd simple-mind-map && npm i && npm link
RUN cd web && npm i && npm link simple-mind-map && npm run build

# =============================================================

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /build/index.html /build/dist ./
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
