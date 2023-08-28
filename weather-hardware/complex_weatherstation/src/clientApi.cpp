#include "clientApi.h"

ClientApi::ClientApi(String baseUrl)
{
    this->baseUrl = baseUrl;
}

void ClientApi::setup()
{
    const char *ssid = "JOJO 2.4G";        // replace this with your WiFi network name
    const char *password = "1234567890bb"; // replace this with your WiFi network password
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }

    Serial.println("Connected to WiFi");
}

void ClientApi::sendWeatherData(int angle, float windSpeed, float temperature, float atmospheric_pressure)
{
    WiFiClient client;
    HTTPClient http;
    String payload;

    // Create the JSON payload
    StaticJsonDocument<128> doc;
    JsonObject weatherRecord = doc.createNestedObject("weatherRecord");
    weatherRecord["windAngle"] = angle;
    weatherRecord["windSpeed"] = windSpeed;
    weatherRecord["temperature"] = temperature;
    weatherRecord["atmospheric_pressure"] = atmospheric_pressure;

    serializeJson(doc, payload);

    // Make the HTTP POST request

    http.begin(client, baseUrl + "/weatherstation/create-weather-record/75448946-d1dc-4426-9ff5-ea4a2a101341");
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0)
    {
        Serial.println("good send to server");
        String response = http.getString();
    }
    else
    {
        Serial.print("Error sending request. HTTP Response code: ");
        Serial.println(httpResponseCode);
    }

    http.end();
}

void ClientApi::sendTippingBucketRainGaugeData()
{
    WiFiClient client;
    HTTPClient http;

    // Make the HTTP POST request
    http.begin(client, baseUrl + "/weatherstation/tipping-bucket-rain-gauge/75448946-d1dc-4426-9ff5-ea4a2a101341");
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST("{}"); // Send an empty JSON object as the payload

    if (httpResponseCode > 0)
    {
        Serial.println("Good send to server");
        String response = http.getString();
    }
    else
    {
        Serial.print("Error sending request. HTTP Response code: ");
        Serial.println(httpResponseCode);
    }

    http.end();
}
