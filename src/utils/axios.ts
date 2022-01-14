import axios from 'axios';
import { APIResponse } from '../interfaces';

type LocalizationSearch = {
  results : {
    geometry: {
      location: {
        lat: string
        lng: string
      }
    }
  }[]
}
type GetWeatherProps = {
  latitude?: number
  longitude?: number
}

const httpWeather = axios.create({
  baseURL: 'https://yahoo-weather5.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
  },
});
const httpMaps = axios.create({
  baseURL: 'https://google-maps-geocoding.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
  },
});

export async function getWeather(coords: GetWeatherProps): Promise<APIResponse | undefined> {
  if (coords.latitude === 0) {
    return;
  }
  const { data } = await httpWeather.get<APIResponse>('weather', {
    params: {
      lat: coords?.latitude, long: coords?.longitude, format: 'json', u: 'c',
    },
  });

  // eslint-disable-next-line consistent-return
  return data;
}
export async function getLocalization(query: string) {
  const { data } = await httpMaps.get<LocalizationSearch>('geocode/json', {
    params: { address: query, language: 'pt-BR' },
  });
  if (!data.results[0]) {
    return {
      longitude: 0,
      latitude: 0,
    };
  }

  return {
    longitude: data.results[0].geometry.location.lng as unknown as number,
    latitude: data.results[0].geometry.location.lat as unknown as number,
  };
}
