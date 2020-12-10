FROM node:10


WORKDIR /app


COPY package.json /app

RUN npm install

# Bundle app source
COPY . /app
CMD node server.js

EXPOSE 8081

