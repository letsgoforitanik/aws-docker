FROM node:alpine3.18 AS build-stage
WORKDIR /app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM node:alpine3.18 AS deploy-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist/
COPY --from=build-stage /app/package*.json /app/
RUN ["npm", "install", "--omit=dev"]
CMD ["npm", "run", "prod"]

