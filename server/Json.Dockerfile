FROM node:12-alpine

WORKDIR /server

ADD package*.json ./server/

RUN npm install

ADD . ./server

EXPOSE 3001

CMD [ "npm", "start" ]