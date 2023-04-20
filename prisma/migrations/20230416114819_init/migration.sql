/*
  Warnings:

  - You are about to drop the column `humidity` on the `WeatherRecord` table. All the data in the column will be lost.
  - You are about to drop the column `precipitation` on the `WeatherRecord` table. All the data in the column will be lost.
  - You are about to drop the column `pressure` on the `WeatherRecord` table. All the data in the column will be lost.
  - You are about to drop the column `temperature` on the `WeatherRecord` table. All the data in the column will be lost.
  - You are about to drop the column `windDirection` on the `WeatherRecord` table. All the data in the column will be lost.
  - You are about to drop the column `windSpeed` on the `WeatherRecord` table. All the data in the column will be lost.
  - Added the required column `weatherRecord` to the `WeatherRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeatherRecord" DROP COLUMN "humidity",
DROP COLUMN "precipitation",
DROP COLUMN "pressure",
DROP COLUMN "temperature",
DROP COLUMN "windDirection",
DROP COLUMN "windSpeed",
ADD COLUMN     "weatherRecord" JSONB NOT NULL;
