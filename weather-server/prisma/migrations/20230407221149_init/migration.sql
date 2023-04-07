/*
  Warnings:

  - You are about to drop the column `record_date` on the `WeatherRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WeatherRecord" DROP COLUMN "record_date",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
