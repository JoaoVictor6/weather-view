import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../App';
import { getLocalization, getWeather } from '../../utils/axios';
import { Menu } from './style';

type SideMenuProps = {
  isOpen: boolean
}

type WeatherData = {
  city: string
  temp: number
}

export default function SideMenu({ isOpen }:SideMenuProps) {
  useEffect(() => {
    if (isOpen) {
      console.log('22');
    }
  }, []);

  const [weatherArray, setWeatherArray] = useState<WeatherData[]>([]);
  const { weatherInfo, setWeatherInfo, setForecasts } = useContext(WeatherContext);

  const addNewWeather = () => {
    if (!weatherInfo) {
      return;
    }
    if (
      !weatherArray.some(({ city }) => city === `${weatherInfo?.location.city}, ${weatherInfo?.location.region}`)
    ) {
      setWeatherArray((old) => [...old as WeatherData[], {
        city: `${weatherInfo?.location.city}, ${weatherInfo?.location.region}`,
        temp: weatherInfo?.current_observation.condition.temperature || 0,
      }]);
    }
  };

  const updateWeather = async (city: string) => {
    const coords = await getLocalization(city);
    const weather = await getWeather(coords);
    setWeatherInfo && setWeatherInfo(weather);
    setForecasts && setForecasts(weather?.forecasts);
  };
  return (
    <Menu className={`${isOpen && 'open'}`}>
      <h1>Cities</h1>
      <ul>
        <li>
          <button
            type="button"
            className="btn-list btn-new"
            onClick={() => addNewWeather()}
          >
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add new item
            </h1>
          </button>
        </li>
        {
          weatherArray
          && weatherArray.map(({ city, temp }, index) => (
            <li key={`list-city__${index + 1}`}>
              <button
                onClick={() => updateWeather(city)}
                type="button"
                className="btn-list"
              >
                <h1>{city}</h1>
                <h2>
                  {temp}
                  °
                </h2>
              </button>
            </li>
          ))
        }
      </ul>
    </Menu>
  );
}
