FROM node:current-alpine3.16

WORKDIR /usr/src/orange-ci-server 

COPY package.json package-lock.json tsconfig.json ./
RUN npm install
COPY src .
RUN npm build-ts

COPY dist .
CMD ["npm","serve"]
