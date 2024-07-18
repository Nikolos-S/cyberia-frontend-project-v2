install:
	npm ci
	
start:
	npm run dev

startUi:
	vue ui

lint:
	npx eslint .

fix:
	npx eslint --fix .

build:
	npm run build