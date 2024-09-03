FROM registry.global.ccc.srvb.bo.paas.cloudcenter.corp/produban/nginx-1-23-ubi8:1.3.0.RELEASE

# NOTE: DO *NOT* EDIT THIS FILE.  IT IS MANAGED BY ALM DEVOPS TEAM.

USER root

RUN rm -rf /usr/share/nginx/html

RUN mkdir /usr/share/nginx/html/

COPY dist/*/* /usr/share/nginx/html/
COPY nginx/nginx.config /etc/nginx/conf.d/default.conf

RUN chown 999 -R /tmp
RUN chown 999 -R /usr/share/nginx/html
RUN chown 999 -R /etc/nginx/conf.d
RUN chown 999 -R /var/log
RUN chown 999 -R /opt

RUN chmod -R 776 /opt
RUN chmod -R 775 /etc/nginx/conf.d

USER 999

ENTRYPOINT [ "./control.sh" ]
CMD [ "start" ]