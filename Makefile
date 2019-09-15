build:
	yarn workspace sample
	yarn workspace sample upgrade --latest
	yarn workspace sample build	
.PHONY: clean