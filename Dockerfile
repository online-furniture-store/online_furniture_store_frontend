FROM node:18-alpine as front_build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r front_build result_build