FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/orange-ci-server 

COPY package.json package-lock.json ./
RUN npm install
COPY ./dist/ ./dist

CMD ["npm","start"]