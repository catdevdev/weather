#ifndef RAIN_GAUGE_SENSOR_H
#define RAIN_GAUGE_SENSOR_H

class RainGaugeSensor
{
private:
  int pin;

public:
  RainGaugeSensor(int pin);
  void setup();
  void measure();
};

#endif
