#include <Arduino.h>
#include "windSpeed.h"
#include "windDirectionSensor.h"
#include "tippingBucketRainGauge.h"
#include "AS5600.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <clientApi.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include "Adafruit_BMP3XX.h"

const char *ssid = "JOJO 2.4G";
const char *password = "1234567890bb";

const char *serverBaseURL = "http://46.175.147.63:9001";

#define BMP_SCK 14
#define BMP_MISO 12
#define BMP_MOSI 13
#define BMP_CS 15

#define SEALEVELPRESSURE_HPA (1013.25)
Adafruit_BMP3XX bmp;

const int WIND_SPEED_SENSOR_PIN = 16; // 16
const int RAIN_GAUGE_SENSOR_PIN = 12;

WindSpeedSensor windSpeedSensor(WIND_SPEED_SENSOR_PIN);
RainGaugeSensor rainGaugeSensor(RAIN_GAUGE_SENSOR_PIN);
WindDirectionSensor windDirectionSensor;
ClientApi clientApi(serverBaseURL);

void setup()
{
  Serial.begin(9600);
  windSpeedSensor.setup();
  windDirectionSensor.setup();
  rainGaugeSensor.setup();
  clientApi.setup();

  if (!bmp.begin_I2C())
  { // hardware I2C mode, can pass in address & alt Wire
    // if (! bmp.begin_SPI(BMP_CS)) {  // hardware SPI mode
    // if (! bmp.begin_SPI(BMP_CS, BMP_SCK, BMP_MISO, BMP_MOSI)) {  // software SPI mode
    Serial.println("Could not find a valid BMP3 sensor, check wiring!");
    while (1)
      ;
  }
  bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);
  bmp.setPressureOversampling(BMP3_OVERSAMPLING_4X);
  bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_3);
  bmp.setOutputDataRate(BMP3_ODR_50_HZ);

  delay(1000);
}

unsigned long previousTime = 0;

void loop()
{
  windSpeedSensor.measure();
  rainGaugeSensor.measure();
  // float windSpeed = windSpeedSensor.getWindSpeed();
  // Serial.println(windSpeed);

  // if (!windDirectionSensor.checkForErrors())
  // {
  //   int angle = windDirectionSensor.getAngle();
  // }

  unsigned long currentTime = millis();

  if (!bmp.performReading())
  {
    Serial.println("Failed to perform reading :(");
    return;
  }

  if (currentTime - previousTime >= 1000)
  {
    previousTime = currentTime;
    int angle = windDirectionSensor.getAngle();
    float windSpeed = windSpeedSensor.getWindSpeed();

    clientApi.sendWeatherData(angle, windSpeed, bmp.temperature, bmp.pressure);
  }
}
