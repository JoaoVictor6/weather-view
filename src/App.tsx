/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, ContainerIfNotPermission } from './styles/pages/app';
import useGeolocation from './hooks/useGeolocation';
import rainAndDrizzleImage from './assets/rain_drizzle.jpg';
import cloudsImage from './assets/clouds.jpg';
import snowImage from './assets/snow.jpg';
import clearImage from './assets/clear.jpg';
import thunderstormImage from './assets/thunderstorm.jpg';
import mistImage from './assets/mist.jpg';

interface WeatherApiResponse {
  name: string
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ],
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure:number
    humidity: number
    sea_level: number
    grnd_level: number
  },
}

type mainWeatherValues = 'clouds' | 'rain' | 'drizzle' | 'snow' | 'clear' | 'thunderstorm' | 'mist'
function backgroundSelector(main:string = 'clouds') {
  const mainWeather = main.toLowerCase() as mainWeatherValues;

  const bgMaps:Record<mainWeatherValues, string> = {
    clouds: cloudsImage,
    rain: rainAndDrizzleImage,
    drizzle: rainAndDrizzleImage,
    snow: snowImage,
    clear: clearImage,
    thunderstorm: thunderstormImage,
    mist: mistImage,
  };

  return bgMaps[mainWeather];
}

function App() {
  const { coords } = useGeolocation();
  const [weatherApi, setWeatherApi] = useState<WeatherApiResponse| null>(null);
  const [apiIsLoad, setIpiIsLoad] = useState(false);
  useEffect(() => {
    if (!(coords === null) && weatherApi === null) {
      (async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        setWeatherApi(await response.json() as WeatherApiResponse);

        setIpiIsLoad(true);
      })();
    }
  }, [coords, weatherApi]);

  return (
    <div>
      {coords === null && !apiIsLoad ? (
        <ContainerIfNotPermission>
          <section className="content">
            <h1>Turn on geolocalization for use this web app</h1>
            <div className="load"><div /></div>
          </section>
        </ContainerIfNotPermission>
      ) : (
        <Container style={{
          backgroundImage: `url(${backgroundSelector(weatherApi?.weather[0].main)})`,
        }}
        >
          <Helmet>
            <link
              rel="icon"
              href={`http://openweathermap.org/img/wn/${weatherApi?.weather[0].icon}@2x.png`}
            />
          </Helmet>
          <section>
            <header>
              <h1>{weatherApi?.name}</h1>
              <h2>{weatherApi?.weather[0].description}</h2>
            </header>
            <div>
              <h1 className="temp">
                {weatherApi?.main.temp.toFixed(0)}
                °
              </h1>
              <h2 className="humidity">
                Humidity:
                {' '}
                {weatherApi?.main.humidity}
                %
              </h2>
            </div>

          </section>
        </Container>
      )}
    </div>
  );
}

export default App;
