######################**DEPENDENCIES**##############################
# Install dependency only when needed
FROM node:17-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install


#######################**BUILDER**##################################
# build stage for trueme
FROM node:17-alpine AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN npm run build 


#######################**RUNNER**###################################
# run stage for trueme
FROM node:17-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN mkdir -p /app

WORKDIR /app

COPY --from=builder /app ./

RUN npm install -g serve

# Expose port
EXPOSE 3333

# Start the app
CMD [ "npm", "run", "start:prod" ]
