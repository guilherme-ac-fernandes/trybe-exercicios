# Resolução baseada na resolução presente no site Tiangolo
# source: https://tiangolo.medium.com/react-in-docker-with-nginx-built-with-multi-stage-docker-builds-including-testing-8cc49d6ec305

FROM node AS build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.21-alpine AS deploy-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
