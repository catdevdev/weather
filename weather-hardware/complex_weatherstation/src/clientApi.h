#ifndef CLIENTAPI_H
#define CLIENTAPI_H

#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

class ClientApi
{
private:
    String baseUrl;

public:
    ClientApi(String baseUrl);
    void setup();
    void sendWeatherData(int angle, float windSpeed, float temperature, float atmospheric_pressure);
    void sendTippingBucketRainGaugeData();
};

#endif
