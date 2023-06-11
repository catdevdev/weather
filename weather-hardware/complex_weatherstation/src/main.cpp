#include <Arduino.h>
#include "windSpeed.h"
#include "windDirectionSensor.h"
#include "tippingBucketRainGauge.h"

#include "AS5600.h"
#include "Wire.h"

const int WIND_SPEED_SENSOR_PIN = 14;
const int RAIN_GAUGE_SENSOR_PIN = 12;

WindSpeedSensor windSpeedSensor(WIND_SPEED_SENSOR_PIN);
RainGaugeSensor rainGaugeSensor(RAIN_GAUGE_SENSOR_PIN);
WindDirectionSensor windDirectionSensor;

void setup()
{
  Serial.begin(9600);
  windSpeedSensor.setup();
  windDirectionSensor.setup();
  rainGaugeSensor.setup();

  Wire.begin();

  delay(1000);
}

void loop()
{

  windSpeedSensor.measure();
  rainGaugeSensor.measure();

  if (!windDirectionSensor.checkForErrors())
  {
    int angle = windDirectionSensor.getAngle();
    Serial.println(angle);
  }

  delay(100);
}
