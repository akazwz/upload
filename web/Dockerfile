FROM node

WORKDIR /app

COPY package.json ./

RUN npm config set registry https://registry.npmmirror.com/
RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]