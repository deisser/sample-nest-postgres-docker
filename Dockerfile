FROM node:12.13-alpine as dist
WORKDIR /tmp/
COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./
COPY src/ src/
COPY scripts/ scripts/
RUN yarn install
RUN yarn build

# -- finish building sources

FROM node:12.13-alpine as node_modules
WORKDIR /tmp/
COPY package.json yarn.lock ./
RUN yarn install --prod

# -- finish installing prod dependencies

FROM node:12.13-alpine
USER node
RUN mkdir -p /home/node
WORKDIR /home/node

COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
COPY package.json yarn.lock tsconfig.json ./
COPY --chown=node:node scripts/ ./scripts

RUN chmod 755 /home/node/scripts/start.sh

ENV NODE_ENV production
ENV RUN_MIGRATIONS true

EXPOSE 5000

ENTRYPOINT ["sh", "/home/node/scripts/start.sh"]