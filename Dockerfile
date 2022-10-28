FROM node:lts as dependencies
WORKDIR /peace_web
# COPY package.json yarn.lock ./
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /peace_web
COPY . .
COPY --from=dependencies /peace_web/node_modules ./node_modules
RUN DISABLE_ESLINT_PLUGIN=true npm run build

FROM node:lts as runner
WORKDIR /peace_web
ENV NODE_ENV production

COPY --from=builder /peace_web/.env ./
COPY --from=builder /peace_web/next.config.mjs ./
COPY --from=builder /peace_web/public ./public
COPY --from=builder /peace_web/.next ./.next
COPY --from=builder /peace_web/node_modules ./node_modules
COPY --from=builder /peace_web/package.json ./package.json

EXPOSE 3000
CMD ["node", "start"]