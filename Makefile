VERSION := v0.0.10

.PHONY: build

build::
		npm install && \
		npm run build
	cp README.md package.json yarn.lock bin/

release:: build
release::
		npm publish