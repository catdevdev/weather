/*
  Warnings:

  - You are about to drop the column `date_recorded` on the `WeatherRecord` table. All the data in the column will be lost.
  - Added the required column `record_date` to the `WeatherRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeatherRecord" DROP COLUMN "date_recorded",
ADD COLUMN     "record_date" TIMESTAMP(3) NOT NULL;
