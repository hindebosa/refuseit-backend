FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate 

RUN npx prisma migrate dev 

RUN yarn run build

CMD [ "yarn", "start:dev" ]