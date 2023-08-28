#include "windSpeed.h"

// Время ожидания в миллисекундах для обнуления, если застывание происходит в состоянии active или inactive
const unsigned long FREEZE_TIME = 5000;

WindSpeedSensor::WindSpeedSensor(int pin)
{
    this->pin = pin;
    this->isActive = false;
    this->startTime = 0;
    this->interval = 0;
}

void WindSpeedSensor::setup()
{
    pinMode(pin, INPUT);
}

void WindSpeedSensor::measure()
{
    int signal = digitalRead(pin);
    unsigned long currentTime = millis();

    if (signal == HIGH && !isActive)
    {
        isActive = true;
        startTime = currentTime;
    }
    else if (signal == LOW && isActive)
    {
        isActive = false;
        unsigned long endTime = currentTime;
        interval = endTime - startTime;
    }

    if ((isActive && (currentTime - startTime >= FREEZE_TIME)) || (!isActive && (currentTime - startTime >= FREEZE_TIME)))
    {
        // Если застывание происходит в состоянии active или inactive, обнуляем все значения
        isActive = false;
        interval = 0;
    }
}

float WindSpeedSensor::getWindSpeed()
{
    float windSpeed = 0;

    if (interval != 0)
    {
        windSpeed = (1000.0 / (float)interval) * 2.5;
    }

    return windSpeed;
}
