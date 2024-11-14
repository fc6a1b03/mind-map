FROM node:14-alpine AS build
WORKDIR /app
RUN cd simple-mind-map && npm i && npm link
RUN cd web && npm i && npm link simple-mind-map
RUN cd web && npm run build

# =============================================================

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=build /app/index.html /app/dist ./
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
