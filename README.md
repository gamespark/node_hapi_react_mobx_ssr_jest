<h1 align="center">Welcome to Test Project 👋</h1>
<p>

### 🏠 [Homepage](<%= https://github.com/gamespark/test-project %>)
https://github.com/gamespark/test-project
  
### ✨ [Demo](<%= http://14.29.215.140:9001/ %>)
[Demo Address](http://14.29.215.140:9001/)

## System Architecture:

```sh
  	Web Host: node + hapijs -- SSR
	Web Page: react + mobx
	Packaging tool: webpack
	UT: jest + @testing-library/react
	Code check: eslint + prettier
```

## Build & Debug in dev:

```sh
  	1. npm run build
  	2. npm run dev.js
OR
  	1. npm run dev
```

## Build & Run in prod:

```sh
	1. npm run build-prod
    2. npm run prod
OR
  	1. npm run server
```
  
## Run in docker:

```sh
Build docker image:
  	docker build -t testproject:1.0 .
Run in docker container:
  	docker run -d --name testproject -p 3000:3000 testproject:1.0
```
  
## Auto format code and fix eslint error:

```sh
	npm run format
```

## Run tests

```sh
	npm run test
```