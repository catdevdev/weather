-- CreateTable
CREATE TABLE "TippingBucketRainGauge" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weatherStationId" TEXT,

    CONSTRAINT "TippingBucketRainGauge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TippingBucketRainGauge" ADD CONSTRAINT "TippingBucketRainGauge_weatherStationId_fkey" FOREIGN KEY ("weatherStationId") REFERENCES "WeatherStation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
