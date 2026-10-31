FROM docker.io/library/nginx:1.30.6-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/
COPY keys/ /usr/share/nginx/html/keys/

EXPOSE 80
