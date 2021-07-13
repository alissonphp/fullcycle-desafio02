FROM node:latest

WORKDIR /app/routes
RUN apt update

COPY . /app
RUN yarn && yarn global add @nestjs/cli

EXPOSE 3000
CMD ["yarn", "start:dev"]