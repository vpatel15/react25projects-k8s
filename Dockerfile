# FROM nginx

# COPY container /
# COPY build /usr/share/nginx/html

# ENV API_KEY '163ef85e4c0c197b6f57d2f175057a30'

# CMD /bin/bash -c "envsubst '\$API_KEY' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"


FROM node:alpine
 
# Add the following lines
# ENV CI=true
# ENV WDS_SOCKET_PORT=0
 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
 
CMD ["npm", "start"]