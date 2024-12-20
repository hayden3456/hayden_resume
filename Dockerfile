FROM node:18.20.4-alpine AS builder
WORKDIR /app
COPY package.json .

# Install dependencies (using the default or latest npm version)
RUN npm install && npm install

COPY . .

ARG SENDGRID_API_KEY
ENV SENDGRID_API_KEY=$SENDGRID_API_KEY

ARG SENDGRID_SENDER
ENV SENDGRID_SENDER=$SENDGRID_SENDER

ARG MAILGUN_DOMAIN
ENV MAILGUN_DOMAIN=$MAILGUN_DOMAIN

ARG MAILGUN_API_KEY
ENV MAILGUN_API_KEY=$MAILGUN_API_KEY

ARG MAILGUN_SENDER
ENV MAILGUN_SENDER=$MAILGUN_SENDER

ARG MAIL_PROVIDER
ENV MAIL_PROVIDER=$MAIL_PROVIDER

ARG EMAIL_TO
ENV EMAIL_TO=$EMAIL_TO

RUN npm run build
RUN npm prune --production

FROM node:18.20.4-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "build"]
