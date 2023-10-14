# BUILD IMAGE
FROM node:20-alpine as builder

ARG OPS

WORKDIR /source
COPY package*.json ./
RUN npm i
COPY . .
RUN OPS=${OPS} npm run build

# RUNTIME IMAGE
FROM nginx:alpine as runtime
WORKDIR /app
COPY --from=builder /source/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]