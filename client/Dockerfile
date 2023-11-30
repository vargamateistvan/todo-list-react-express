FROM node:18-alpine

WORKDIR /user/src/app/client

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]