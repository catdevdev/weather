#include "WindDirectionSensor.h"

WindDirectionSensor::WindDirectionSensor() {}

void WindDirectionSensor::setup()
{
    if (!as5600.isConnected())
    {
        Serial.println("Not connected");
        return;
    }

    if (!as5600.detectMagnet())
    {
        Serial.println("No magnet detected");
        return;
    }

    if (as5600.magnetTooStrong())
    {
        Serial.println("Magnet too strong");
        return;
    }

    if (as5600.magnetTooWeak())
    {
        Serial.println("Magnet too weak");
        return;
    }

    Wire.begin();
    delay(1000);
}

bool WindDirectionSensor::checkForErrors()
{
    if (!as5600.isConnected() || !as5600.detectMagnet() || as5600.magnetTooStrong() || as5600.magnetTooWeak())
    {
        return true;
    }

    return false;
}

int WindDirectionSensor::getAngle()
{
    int angle = map(as5600.readAngle(), 0, 4095, 0, 360);
    return angle;
}
