FROM nginx
MAINTAINER Tobias Wilken <tooangel@tooangel.de>

COPY ./_site /usr/share/nginx/html
EXPOSE 8080:80
