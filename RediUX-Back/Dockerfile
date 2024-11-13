FROM node:20.12.2

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx ts-node src/shared/infra/typeorm/seed/admin.ts || true && npm run dev"]