FROM node AS react-build
WORKDIR /home/node/app
COPY ./app-react .
RUN npm run build
RUN npm install

FROM nginx:1.21-alpine AS react-deploy
COPY --from=react-build /home/node/app /usr/share/nginx/html
