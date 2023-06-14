#ifndef WIND_SPEED_H
#define WIND_SPEED_H

#include <Arduino.h>

class WindSpeedSensor {
  private:
    int pin;
    volatile unsigned long lastSignalTime;
    volatile float speed;

  public:
    WindSpeedSensor(int pin);
    void setup();
    void measure();
    float getSpeed();
};

#endif
