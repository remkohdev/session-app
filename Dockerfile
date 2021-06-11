FROM registry.access.redhat.com/ubi8/nodejs-14

COPY ./index.js /home/app/
COPY ./login.html /home/app/
COPY ./package*.json /home/app/

WORKDIR /home/app

USER root
RUN npm install

USER 1001
EXPOSE 3000

CMD node .
