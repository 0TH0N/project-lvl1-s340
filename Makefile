install: babel-cli babel-core babel-preset-env babel-preset-stage-0
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js
