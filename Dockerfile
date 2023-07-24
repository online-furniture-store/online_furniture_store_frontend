FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.21.3-alpine

RUN apk update && apk add openssl

RUN mkdir -p /home/web/www

RUN openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

COPY --from=builder /app/build /usr/share/nginx/html/