#include "tippingBucketRainGauge.h"
#include <Arduino.h>

RainGaugeSensor::RainGaugeSensor(int pin)
{
    this->pin = pin;
}

void RainGaugeSensor::setup()
{
    pinMode(pin, INPUT);
}

void RainGaugeSensor::measure()
{
    int rainTipped = digitalRead(pin);

    if (rainTipped == LOW)
    {
        Serial.println("Rain tipped in the bucket!");
    }
}
