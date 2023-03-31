# build stage
FROM node:17-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .env ./.env

COPY . .

RUN npm run build


# production build phase
FROM node:17-alpine as production

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

COPY --from=build /app/.env .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]