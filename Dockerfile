# BUILD IMAGE
FROM node:20-alpine as builder

ARG ENV
ARG PORT

WORKDIR /source
COPY package*.json ./
RUN npm i
COPY . .
RUN ENV=${ENV} npm run build

# RUNTIME IMAGE
FROM nginx:alpine as runtime
WORKDIR /app
COPY --from=builder /source/dist /usr/share/nginx/html
EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]