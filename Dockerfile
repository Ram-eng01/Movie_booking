FROM nginx
MAINTAINER rammohan <rammohan@gmail.com>
LABEL This is used to deply docker file using jenkins file line
COPY . /usr/share/nginx/html/
