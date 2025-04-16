FROM nginx:stable-alpine
#RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY cert/* /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
