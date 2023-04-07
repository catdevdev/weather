/*
  Warnings:

  - You are about to drop the column `access_token` on the `WeatherStation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WeatherStation" DROP COLUMN "access_token",
ADD COLUMN     "api_key" TEXT;
