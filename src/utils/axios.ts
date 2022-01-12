import axios from 'axios';
import { APIResponse } from '../interfaces';

const http = axios.create({
  baseURL: 'https://yahoo-weather5.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
  },
});

type GetWeatherProps = {
  latitude?: number
  longitude?: number
}
export async function getWeather(coords: GetWeatherProps): Promise<APIResponse | undefined> {
  if (coords.latitude === 0) {
    return;
  }
  const { data } = await http.get<APIResponse>('weather', {
    params: {
      lat: coords?.latitude, long: coords?.longitude, format: 'json', u: 'c',
    },
  });

  // eslint-disable-next-line consistent-return
  return data;
}
