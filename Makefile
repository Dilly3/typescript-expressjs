.PHONY: up down build logs clean

# Start the containers
up:
	docker compose up -d

# Stop the containers
down:
	docker compose down

# Build or rebuild services
build:
	docker compose build

# View container logs
logs:
	docker compose logs -f

# Clean up containers, images, and volumes
clean:
	docker compose down -v --rmi all

# Restart containers
restart: down up 