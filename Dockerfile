FROM node:latest as build-deps

WORKDIR /usr/src/app

COPY package*.json ./

COPY .babelrc ./

COPY webpack.config.js ./

RUN npm install

ADD . /usr/src/app

RUN npm run build

FROM nginx:alpine

ADD nginx /etc/nginx/conf.d

COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
