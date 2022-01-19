import { useContext, useState } from 'react';
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
  const [removeOptions, setRemoveOptions] = useState(false);
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
  const removeItem = (cityDeleted: string) => {
    setWeatherArray((old) => old.filter(({ city }) => city !== cityDeleted));
  };
  return (
    <Menu className={`${isOpen && 'open'}`}>
      <h1 className="menu-title">
        Cities
        <button
          type="button"
          onClick={() => setRemoveOptions((old) => !old)}
        >
          {
            removeOptions ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )
          }
        </button>
      </h1>
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
                onClick={() => {
                  removeOptions ? removeItem(city) : updateWeather(city);
                }}
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
