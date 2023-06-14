#include <Arduino.h>
#include "windSpeed.h"
#include "windDirectionSensor.h"
#include "tippingBucketRainGauge.h"
#include "AS5600.h"
#include "Wire.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char *ssid = "JOJO 2.4G";        // replace this with your WiFi network name
const char *password = "1234567890bb"; // replace this with your WiFi network password

const char *serverURL = "http://46.175.147.63:9001/weatherstation/create-weather-record/75448946-d1dc-4426-9ff5-ea4a2a101341";

const int WIND_SPEED_SENSOR_PIN = 14;
const int RAIN_GAUGE_SENSOR_PIN = 12;

WindSpeedSensor windSpeedSensor(WIND_SPEED_SENSOR_PIN);
RainGaugeSensor rainGaugeSensor(RAIN_GAUGE_SENSOR_PIN);
WindDirectionSensor windDirectionSensor;

void setup()
{
  Serial.begin(9600);
  windSpeedSensor.setup();
  windDirectionSensor.setup();
  rainGaugeSensor.setup();

  Wire.begin();

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("Connected to WiFi");
  //   Serial.print("IP Address is: ");
  //   Serial.println(WiFi.localIP());
  delay(1000);
}

void sendWeatherData(int angle, float windSpeed)
{
  WiFiClient client;
  HTTPClient http;

  // Prepare the JSON payload
  String payload;
  if (angle == -1)
  {
    payload = "{\"weatherRecord\":{\"windAngle\":null,\"windSpeed\":" + String(windSpeed) + "}}";
  }
  else
  {
    payload = "{\"weatherRecord\":{\"windAngle\":" + String(angle) + ",\"windSpeed\":" + String(windSpeed) + "}}";
  }

  // Make the HTTP POST request
  http.begin(client, serverURL);
  http.addHeader("Content-Type", "application/json");

  int httpResponseCode = http.POST(payload);

  if (httpResponseCode > 0)
  {
    // Serial.print("HTTP R esponse code: ");
    // Serial.println(httpResponseCode);
    String response = http.getString();
    // Serial.println(response);
  }
  else
  {
    Serial.print("Error sending request. HTTP Response code: ");
    Serial.println(httpResponseCode);
  }

  http.end();
}

void loop()
{
  windSpeedSensor.measure();
  rainGaugeSensor.measure();

  if (!windDirectionSensor.checkForErrors())
  {
    int angle = windDirectionSensor.getAngle();
    // Serial.println(angle);

    sendWeatherData(angle, 10);
  }
  else
  {
    // Send null angle
    sendWeatherData(-1, 10);
  }

  delay(100);
}

// /*
// **  Connect the ESP8266 unit to an existing WiFi access point
// **  For more information see http://42bots.com
// */
// #include "Wire.h"
// #include <ESP8266WiFi.h>

// // Replace these with your WiFi network settings
// const char *ssid = "JOJO 2.4G";        // replace this with your WiFi network name
// const char *password = "1234567890bb"; // replace this with your WiFi network password

// void setup()
// {
//   delay(1000);
//   Serial.begin(9600);

// WiFi.begin(ssid, password);

//   Serial.println();
//   Serial.print("Connecting");
// while (WiFi.status() != WL_CONNECTED)
// {
//   delay(500);
//   Serial.print(".");
// }

//   Serial.println("success!");
//   Serial.print("IP Address is: ");
//   Serial.println(WiFi.localIP());
// }

// void loop()
// {
// }