FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY ./src ./src
COPY ./videos ./videos
CMD npm start 