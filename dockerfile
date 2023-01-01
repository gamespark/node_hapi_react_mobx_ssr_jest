FROM node:16.14
RUN mkdir -p /test-project
WORKDIR /test-project
COPY . /test-project
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i
RUN npm run build-prod
EXPOSE 3000
CMD npm run prod
