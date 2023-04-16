// including lora e22 library
#define DESTINATION_ADDL 3
#define ENABLE_RSSI true
#include "Arduino.h"
#include "LoRa_E22.h"
// including bmp180 library
#include <Wire.h>
#include <BMP180.h>
// including dht22 library
#include "DHTesp.h"
// including wifi library
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
// including json library
#include <ArduinoJson.h>

const char *ssid = "JOJO 2.4G";
const char *password = "1234567890bb";

BMP180 myBMP(BMP180_ULTRAHIGHRES);
DHTesp dht22;
const int rainSensorGPIOPin = A0;

HTTPClient http;
WiFiClient wifiClient;

#define PIN_RX 14 // D5 on the board (Connect this to the EBYTE TX pin)
#define PIN_TX 12 // D6 on the board (connect this to the EBYTE RX pin)
#define PIN_M0 0  // D1 on the board (connect this to the EBYTE M0 pin)
#define PIN_M1 2  // D2 on the board (connect this to the EBYTE M1 pin)
#define PIN_AX 16 // D0 on the board (connect this to the EBYTE AUX pin)

LoRa_E22 e22ttl100(PIN_RX, PIN_TX, PIN_AX, PIN_M0, PIN_M1);

struct WEATHER_DATA
{
//  char username[30] = "weatherstation_home";
//  char password[30] = "4311067vladvk";
  int pressureFromBMP180;
  double temperatureFromBMP180;
  double temperatureFromDTH22;
  double humidityFromDTH22;
  int analogSignalFromRainSensor;
//  int rssi;
};

//struct WEATHER_STATION_AUTH
//{
//  String token;
//  boolean isAuthorized = false;
//};

WEATHER_DATA ownWeatherData;
//WEATHER_DATA weatherDataFromSomeWeatherStation;

//WEATHER_STATION_AUTH ownWeatherStationAuth;
//WEATHER_STATION_AUTH someWeatherStationAuth;

void setup()
{
  Serial.begin(9600);
//  Serial.println("starting e22 sensor...");
//  e22ttl100.begin();
//  Serial.println("success");

  Serial.println("starting wifi...");
  WiFi.begin(ssid, password);

  Serial.println("success");

  Serial.println("starting bmp180...");
  while (myBMP.begin(4, 5) != true)
  {
    Serial.println(F("Bosch BMP180/BMP085 is not connected or fail to read calibration coefficients"));
    delay(500);
  }
  Serial.println("success");

  Serial.println("starting dht22...");
  dht22.setup(16, DHTesp::DHT22);
  pinMode(rainSensorGPIOPin, INPUT);
  Serial.println("success");
}

void sendDataToServer(WEATHER_DATA *weather_data)
{
  Serial.println(weather_data->pressureFromBMP180);

  StaticJsonDocument<400> doc;
  http.begin(wifiClient, "http://46.175.147.63:9001/weatherstation/create-weather-record/74c8d74e-c5a7-4ab0-95e5-a1be43dd3335");
  http.addHeader("Content-Type", "application/json");
  JsonObject weatherRecord = doc.createNestedObject("weatherRecord");
  weatherRecord["pressureFromBMP180"] = weather_data->pressureFromBMP180;
  weatherRecord["temperatureFromBMP180"] = weather_data->temperatureFromBMP180;
  weatherRecord["temperatureFromDTH22"] = weather_data->temperatureFromDTH22;
  weatherRecord["humidityFromDTH22"] = weather_data->humidityFromDTH22;
  weatherRecord["analogSignalFromRainSensor"] = weather_data->analogSignalFromRainSensor;
  char body[400];
  serializeJson(doc, body);
  int httpCode = http.POST(body);
  Serial.printf("[HTTP] POST... code: %d\n", httpCode);
  String payload = http.getString();
  http.end();
}

unsigned long previousTime = 0;

void loop()
{
  ownWeatherData.pressureFromBMP180 = myBMP.getPressure();
  ownWeatherData.temperatureFromBMP180 = myBMP.getTemperature();
  ownWeatherData.temperatureFromDTH22 = dht22.getTemperature();
  ownWeatherData.humidityFromDTH22 = dht22.getHumidity();
  ownWeatherData.analogSignalFromRainSensor = analogRead(rainSensorGPIOPin);

  unsigned long currentTime = millis();
  if (currentTime - previousTime >= 2000)
  {
    sendDataToServer(&ownWeatherData);
    previousTime = currentTime;
  }

}
