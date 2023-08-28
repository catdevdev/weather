#ifndef WINDSPEED_H
#define WINDSPEED_H

#include <Arduino.h>

class WindSpeedSensor
{
private:
  int pin;
  bool isActive;
  unsigned long startTime;
  unsigned long interval;

public:
  WindSpeedSensor(int pin);
  void setup();
  void measure();
  float getWindSpeed();
};

#endif
