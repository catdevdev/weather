-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "avatarUrl" TEXT,
    "webpageUrl" TEXT,
    "hash" TEXT NOT NULL,
    "hashedRt" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherStation" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" INTEGER NOT NULL,
    "access_token" TEXT,
    "location" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "WeatherStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherRecord" (
    "id" SERIAL NOT NULL,
    "date_recorded" TIMESTAMP(3) NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "pressure" DOUBLE PRECISION NOT NULL,
    "windDirection" DOUBLE PRECISION NOT NULL,
    "windSpeed" DOUBLE PRECISION NOT NULL,
    "weatherStationId" INTEGER,

    CONSTRAINT "WeatherRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "WeatherStation_location_key" ON "WeatherStation"("location");

-- AddForeignKey
ALTER TABLE "WeatherStation" ADD CONSTRAINT "WeatherStation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeatherRecord" ADD CONSTRAINT "WeatherRecord_weatherStationId_fkey" FOREIGN KEY ("weatherStationId") REFERENCES "WeatherStation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
