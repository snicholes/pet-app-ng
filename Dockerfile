# FROM node:16.15.0-alpine3.15 as builder
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

FROM nginx:alpine
COPY /dist/pet-app-ng /usr/share/nginx/html