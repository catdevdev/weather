/*
  Warnings:

  - A unique constraint covering the columns `[api_key]` on the table `WeatherStation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "WeatherRecord" ALTER COLUMN "temperature" DROP NOT NULL,
ALTER COLUMN "humidity" DROP NOT NULL,
ALTER COLUMN "pressure" DROP NOT NULL,
ALTER COLUMN "windDirection" DROP NOT NULL,
ALTER COLUMN "windSpeed" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WeatherStation_api_key_key" ON "WeatherStation"("api_key");
