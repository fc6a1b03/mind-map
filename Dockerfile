FROM node:16 AS builder
WORKDIR /usr/src
COPY . .
RUN npm install -g yarn
RUN cd simple-mind-map && yarn && yarn link
RUN cd web && yarn && yarn link simple-mind-map && yarn run build

# =============================================================

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /usr/src/index.html /usr/src/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
