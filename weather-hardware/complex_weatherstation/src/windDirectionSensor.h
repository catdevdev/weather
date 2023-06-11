#ifndef WIND_DIRECTION_SENSOR_H
#define WIND_DIRECTION_SENSOR_H

#include "AS5600.h"

class WindDirectionSensor
{
private:
    AS5600 as5600;

public:
    WindDirectionSensor();
    void setup();
    int getAngle();
    bool checkForErrors();
};

#endif
