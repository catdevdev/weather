#include "windSpeed.h"
#include <Arduino.h>

WindSpeedSensor::WindSpeedSensor(int pin)
{
    this->pin = pin;
}

void WindSpeedSensor::setup()
{
    pinMode(pin, INPUT);
}

void WindSpeedSensor::measure()
{
    int windSpeed = digitalRead(pin);

    if (windSpeed == LOW)
    {
        Serial.println("Wind detected!");
    }
}
