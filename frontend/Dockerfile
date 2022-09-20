FROM node:lts

COPY ./package.json /app/damn_frontend/

WORKDIR /app/damn_frontend

RUN npm install

RUN npm install -g @angular/cli

COPY ./ /app/damn_frontend/

# CMD [ "npm", "start", "--host", "0.0.0.0" ]
