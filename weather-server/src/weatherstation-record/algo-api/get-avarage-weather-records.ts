import axios from 'axios';

export const getAverageWeatherRecords = (
  gte: string,
  lte: string,
  weatherStationId: string,
  groupBy: string,
) => {
  return axios.get(
    'http://46.175.147.63:9002/api/get-average-weather-records',
    {
      // return axios.get('http://localhost:9002/api/get-average-weather-records', {
      data: {
        gte,
        lte,
        weatherStationId,
        groupBy,
      },
    },
  );
};
