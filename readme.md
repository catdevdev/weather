To start DB remotly run:
docker-compose --env-file=postgres.env -f docker-compose.postgres.yml up --build -d
docker-compose --env-file=postgres.env -f docker-compose.postgres.yml up --build

Do not forgot create dev.env file
docker-compose --env-file=postgres.env -f docker-compose.postgres.yml up --build

ports:
9000-client
9001-nest-server
9002-python-server

9012-database-postgres-dev (located on remote machine)
