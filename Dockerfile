FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY index.html dist ./
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
