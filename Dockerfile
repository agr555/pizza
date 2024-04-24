FROM node:19-alpine AS build
WORKDIR /frontend
RUN npm install -g @angular/cli
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx
COPY nginf.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/dist/pizza /usr/share/nginx/html
EXPOSE 9090
