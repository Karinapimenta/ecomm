FROM node:16-alpine
WORKDIR /app/order
COPY package*.json .
RUN npm install
COPY . .
ENTRYPOINT npm start