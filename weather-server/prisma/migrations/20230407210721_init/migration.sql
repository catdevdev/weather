/*
  Warnings:

  - You are about to drop the column `altitude` on the `WeatherStation` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `WeatherStation` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `WeatherStation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "WeatherStation_location_key";

-- AlterTable
ALTER TABLE "WeatherStation" DROP COLUMN "altitude",
DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "indentifier" TEXT;
