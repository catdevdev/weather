import axios from 'axios';

export const getWeatherRecords = (
  weatherStationId: string,
  gte: string,
  lte: string,
) => {
  // return axios.get('http://localhost:9002/api/weather-records', {
  return axios.get('http://91.219.61.90:9002/api/weather-records', {
    data: {
      gte,
      lte,
      weatherStationId,
    },
  });
};
