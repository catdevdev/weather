import axios from 'axios';

export const getWeatherRecords = (
  weatherStationId: string,
  gte: string,
  lte: string,
) => {
  return axios.get('http://localhost:9002/api/weather-records', {
    data: {
      gte,
      lte,
    },
  });
};
