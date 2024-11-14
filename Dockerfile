FROM node:16 AS build
WORKDIR /build
COPY simple-mind-map web /build/
RUN cd /build/simple-mind-map && npm i && npm link
RUN cd /build/web && npm i && npm link simple-mind-map && npm run build

# =============================================================

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=build /build/index.html /build/dist ./
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
