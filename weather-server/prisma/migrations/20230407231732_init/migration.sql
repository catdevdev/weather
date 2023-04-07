/*
  Warnings:

  - The primary key for the `WeatherStation` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "WeatherRecord" DROP CONSTRAINT "WeatherRecord_weatherStationId_fkey";

-- AlterTable
ALTER TABLE "WeatherRecord" ALTER COLUMN "weatherStationId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "WeatherStation" DROP CONSTRAINT "WeatherStation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "WeatherStation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WeatherStation_id_seq";

-- AddForeignKey
ALTER TABLE "WeatherRecord" ADD CONSTRAINT "WeatherRecord_weatherStationId_fkey" FOREIGN KEY ("weatherStationId") REFERENCES "WeatherStation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
