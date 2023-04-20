/*
  Warnings:

  - Added the required column `weatherRecordSchema` to the `WeatherStation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeatherStation" ADD COLUMN     "weatherRecordSchema" JSONB NOT NULL;
