FROM node:current-alpine3.16

WORKDIR /usr/src/orange-ci-server 

COPY package.json package-lock.json tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npm run build-ts

COPY ./dist ./dist
CMD ["npm","start"]
