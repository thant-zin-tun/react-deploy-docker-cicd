FROM node:22
LABEL maintainer="Thant Zin Tun"
LABEL description="This is testing react project for deploy with docker"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]

EXPOSE 3001






