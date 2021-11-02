import { useEffect, useState } from 'react';
import { Container, ContainerIfNotPermission } from './styles/pages/app';
import rainAndDrizzleImage from './assets/rain_drizzle.jpg';

type CoordsType = {
  latitude: number
  longitude: number
}

function App() {
  const [coords, setCoords] = useState < CoordsType|null >(null);
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);
  return (
    <div>
      {coords === null ? (
        <ContainerIfNotPermission>
          <section className="content">
            <h1>Turn on geolocalization for use this web app</h1>
            <div className="load"><div /></div>
          </section>
        </ContainerIfNotPermission>
      ) : (
        <Container style={{
          backgroundImage: `url(${rainAndDrizzleImage})`,
        }}
        >
          <section>
            <header>
              <h1>London, UK</h1>
              <h2>light intensity drizzle</h2>
            </header>
            <div>
              <h1 className="temp">27°</h1>
              <h2 className="humidity">Humidity: 81%</h2>
            </div>

          </section>
        </Container>
      )}
    </div>
  );
}

export default App;
