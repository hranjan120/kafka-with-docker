FROM node:21.6.2-alpine3.19
WORKDIR /app/consumer-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]