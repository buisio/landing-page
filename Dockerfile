FROM ruby:2.4-alpine3.6
EXPOSE 4000

RUN apk add --no-cache \
  g++ \
  gcc \
  make \
  musl-dev

WORKDIR /tmp/build

COPY Gemfile /tmp/build/Gemfile

RUN /usr/local/bin/bundle install
