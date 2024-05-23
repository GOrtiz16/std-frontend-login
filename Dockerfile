FROM nginx:1.25.5
 
RUN rm -rf /usr/share/nginx/html && \
    sed -i 's/listen       80;/listen 8091;/' /etc/nginx/conf.d/default.conf   

COPY app/dist/std-fronted-login/browser /usr/share/nginx/html