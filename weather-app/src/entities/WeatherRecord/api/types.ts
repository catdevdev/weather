export interface GetWeatherRecordParams {
  weatherStationId: string
  gte: string
  lte: string
}

export interface GetGroupedWeatherRecordParams {
  weatherStationId: string
  gte: string
  lte: string
  groupBy: string
}
