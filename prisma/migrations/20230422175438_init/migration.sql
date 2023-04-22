/*
  Warnings:

  - Added the required column `weatherRecordSchema` to the `WeatherStation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeatherRecord" RENAME COLUMN "createAt" TO "createdAt";

