up:
	@docker compose -p koibanx-backend-challenge --project-directory . \
	-f ./docker-compose.yml \
	up -d --force-recreate