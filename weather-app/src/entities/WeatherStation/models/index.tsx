export interface WeatherStation {
  id: string
  latitude: number
  longitude: number
  api_key: string
  userId: number
  weatherRecordSchema: {
    humidityFromDTH22: string
    pressureFromBMP180: string
    temperatureFromDTH22: string
    temperatureFromBMP180: string
    analogSignalFromRainSensor: string
  }
}

export interface WeatherStationState {
  weatherStations: WeatherStation[]
  isLoading: boolean
  error: undefined | string
}
