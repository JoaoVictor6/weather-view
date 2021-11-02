import { useEffect, useState } from 'react';
import { ContainerIfNotPermission } from './styles/pages/app';

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
          <div className="content">
            <h1>Turn on geolocalization for use this web app</h1>
            <div className="load"><div /></div>
          </div>
        </ContainerIfNotPermission>
      ) : (
        <div>aaaaaaaaaaaaaa</div>
      )}
    </div>
  );
}

export default App;
