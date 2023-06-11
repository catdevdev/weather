#ifndef WIND_SPEED_SENSOR_H
#define WIND_SPEED_SENSOR_H

class WindSpeedSensor
{
private:
    int pin;

public:
    WindSpeedSensor(int pin);
    void setup();
    void measure();
};

#endif
