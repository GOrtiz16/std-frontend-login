FROM nginx:1.25.5
 
RUN rm -rf /usr/share/nginx/html
COPY nginx.config /etc/nginx/conf.d/default.conf
# COPY app/dist/*/* /usr/share/nginx/html/
# COPY app/dist/*/* /usr/share/nginx/html/mf/consolidated-position/
COPY app/dist/mf /usr/share/nginx/html/mf/























# COPY app/dist/*/browser /usr/share/nginx/html







# RUN sed -i 's/listen       80;/listen 8080;/' /etc/nginx/conf.d/default.conf   