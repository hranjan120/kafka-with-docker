FROM node:21.6.2-alpine3.19
WORKDIR /app/producer-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8001
CMD ["npm", "run", "dev"]