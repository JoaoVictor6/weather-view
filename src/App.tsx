import { Container, ContainerIfNotPermission } from './styles/pages/app';
import rainAndDrizzleImage from './assets/rain_drizzle.jpg';
import useGeolocation from './hooks/useGeolocation';

function App() {
  const { coords } = useGeolocation();
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
