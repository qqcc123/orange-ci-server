FROM node:14.17.3-alpine3.14

# WORKDIR 指令所设置的路径是一个虚拟路径，并不一定要对应宿主机上的真实目录。它只是在容器内部建立了一个工作目录
WORKDIR /usr/src/app 

COPY package.json package-lock.json ./
RUN npm install
COPY ./dist/ ./dist

CMD ["npm","start"]