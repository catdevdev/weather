import { WeatherRecord } from '../models'

export const convertWeatherRecordsFromChartSet = (
  weatherRecords: WeatherRecord[][],
  weatherParamenterKey: string,
) => {
  const dataSet = weatherRecords?.map(weatherRecordSubset => {
    return weatherRecordSubset.map(weatherRecordSet => {
      return {
        value: weatherRecordSet.weatherRecord[weatherParamenterKey],
        createdAt: weatherRecordSet.createdAt,
      }
    })
  })
  return dataSet
}
