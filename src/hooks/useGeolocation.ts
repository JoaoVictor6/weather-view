import { useEffect, useState } from 'react';

type CoordsType = {
  latitude: number
  longitude: number
}

export default function useGeolocation() {
  const [coords, setCoords] = useState<CoordsType>({
    latitude: 0,
    longitude: 0,
  });
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

  return { coords };
}
