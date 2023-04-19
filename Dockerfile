# build
FROM node:18-alpine as builder
WORKDIR /home/node/app
COPY yarn.lock package.json ./
RUN yarn install --network-timeout 1000000
COPY . .
RUN yarn run build

# final production image
FROM node:18-alpine
WORKDIR /home/node/app

COPY --from=builder /home/node/app/dist /home/node/app/dist
COPY --from=builder /home/node/app/public /home/node/app/public
COPY --from=builder /home/node/app/views /home/node/app/views
COPY --from=builder /home/node/app/workadventure /home/node/app/workadventure

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
