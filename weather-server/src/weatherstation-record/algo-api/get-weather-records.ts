import axios from 'axios';

export const getWeatherRecords = (
  weatherStationId: string,
  gte: string,
  lte: string,
) => {
  return axios.get('http://localhost:9002/api/weather-records', {
    // return axios.get('http://46.175.147.63:9002/api/weather-records', {
    data: {
      gte,
      lte,
    },
  });
};
