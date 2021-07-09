FROM node:latest

WORKDIR /app/routes
RUN apt update
RUN yarn global add @nestjs/cli
COPY . /app
EXPOSE 3000
CMD ["yarn", "start:dev"]