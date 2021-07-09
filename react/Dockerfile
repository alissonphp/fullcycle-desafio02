FROM node:latest

WORKDIR /app
RUN apt update
COPY . /app
EXPOSE 3001
ENTRYPOINT ["tail", "-f", "/dev/null"]