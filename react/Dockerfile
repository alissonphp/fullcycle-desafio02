FROM node:latest

WORKDIR /app/desafio
RUN apt update
COPY . /app

RUN yarn

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]