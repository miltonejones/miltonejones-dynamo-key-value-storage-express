FROM node:12.18.2-alpine3.9
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm install pm2 -g  
EXPOSE 3000
CMD ["pm2-runtime", "start", "./bin/www"]