FROM node:lts-alpine3.11 as builder

WORKDIR /app

RUN apk upgrade \
    && apk add yarn --no-cache

COPY . /app

RUN yarn install \
    && yarn build

FROM nginx:1.17.10-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
