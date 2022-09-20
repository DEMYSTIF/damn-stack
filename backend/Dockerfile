FROM node:lts

COPY ./package.json /app/damn_backend/

WORKDIR /app/damn_backend

RUN npm install

COPY ./ /app/damn_backend/

# CMD [ "npm", "run", "start:dev" ]
