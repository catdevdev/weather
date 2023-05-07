export interface WeatherRecord {
  id: number
  createdAt: string
  weatherRecord: any
  weatherStationId: string
}

export interface WeatherRecordState {
  weatherRecords: WeatherRecord[][]
  isLoading: boolean
  error: undefined | string
}

export interface GroupedAverageWeatherRecord {
  [value: string]: {
    [timestamp: string]: number
  }
}

export interface GroupedAverageWeatherRecordState {
  groupedAverageWeatherRecords: GroupedAverageWeatherRecord
  isLoading: boolean
  error: undefined | string
}
