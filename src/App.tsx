import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import { Container } from './styles/pages/app';
import sunrise from './assets/images/sunrise.png';
import sunset from './assets/images/sunset.png';
import { getWeather } from './utils/axios';
import { APIResponse, ForecastsProps } from './interfaces';

import locationNotFound from './assets/images/location-not-found.svg';
import ForecastsContainer from './components/ForecastsContainer';
import useGeolocation from './hooks/useGeolocation';

function App() {
  const [forecasts, setForecasts] = useState<ForecastsProps[]>();
  const [weatherInfo, setWeatherInfo] = useState<
    Pick<APIResponse, 'current_observation' | 'location'>
  >();
  const { coords } = useGeolocation();
  useEffect(() => {
    (async () => {
      const response = await getWeather(coords);
      if (response !== undefined) {
        setForecasts(response.forecasts);
        setWeatherInfo({
          current_observation: response.current_observation,
          location: response.location,
        });
      }
    })();
  }, [coords]);
  return (
    <>
      <Menu title={{
        city: weatherInfo?.location.city,
        region: weatherInfo?.location.region,
      }}
      />
      <Container>
        <header>
          <section className="header__title">
            {weatherInfo === undefined ? (
              <img src={locationNotFound} alt="Location not found" />
            ) : (
              <h1>
                {weatherInfo?.current_observation.condition.temperature}
                {' '}
                º
              </h1>
            )}
          </section>
          <section className="header__footer">
            {weatherInfo === undefined ? (
              <p>Not found</p>
            ) : (
              <>
                <p>
                  <img src={sunrise} alt="sunrise hour" />
                  {weatherInfo?.current_observation.astronomy.sunrise}
                </p>
                <p>
                  {weatherInfo?.current_observation.astronomy.sunset}
                  <img src={sunset} alt="sunset hour" />
                </p>
              </>
            )}
          </section>
        </header>
        {forecasts && <ForecastsContainer forecast={forecasts?.slice(1, 7)} />}
      </Container>
    </>
  );
}

export default App;
