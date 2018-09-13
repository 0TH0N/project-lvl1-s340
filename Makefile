install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint

build:
	npm run build
