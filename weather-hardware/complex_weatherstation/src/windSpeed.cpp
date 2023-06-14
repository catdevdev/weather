#include "windSpeed.h"

WindSpeedSensor::WindSpeedSensor(int pin)
{
    this->pin = pin;
}

void WindSpeedSensor::setup()
{
    pinMode(pin, INPUT);
    lastSignalTime = millis();
    speed = 0.0;
}

void WindSpeedSensor::measure()
{
    int signal = digitalRead(pin);

    if (signal == LOW)
    {
        unsigned long currentTime = millis();
        unsigned long elapsedTime = currentTime - lastSignalTime;
        lastSignalTime = currentTime;

        // Calculate speed in meters per second (change as per your sensor's specifications)
        // Here, we assume that each revolution corresponds to 1 meter traveled.
        speed = 1.0 / (elapsedTime / 1000.0);

        Serial.print("Speed: ");
        Serial.print(speed);
        Serial.println(" m/s");
    }
}

float WindSpeedSensor::getSpeed()
{
    return speed;
}
