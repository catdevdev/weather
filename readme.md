To start DB remotly run:
docker-compose --env-file=database-dev.env -f docker-compose.db-dev.yml up --build -d
docker-compose --env-file=database-dev.env -f docker-compose.db-dev.yml up -d

Do not forgot create dev.env file
docker-compose --env-file=postgres.env -f docker-compose.postgres.yml up --build

ports:
9000-client
9001-nest-server
9002-python-server

9011-database-postgres-dev (located on remote machine)
