import { ForecastsProps } from '../../interfaces';
import { Container } from './style';

type ForecastsContainerProps = {
  forecast: ForecastsProps[] | undefined
}

export default function ForecastsContainer({ forecast }: ForecastsContainerProps) {
  return (
    <Container>
      {forecast && forecast.map(({
        day, high, low, text,
      }, key) => (
        <section
          className="weather-section"
          key={`${key + 8}__`}
        >
          <section className="col-1">
            <h1>{day}</h1>
            <section className="temp">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path fill="#D7D0DC" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {low}
                {' '}
                º
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path fill="#D7D0DC" fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {high}
                {' '}
                º
              </p>
            </section>
          </section>
          <h2>{text}</h2>
        </section>
      ))}
    </Container>
  );
}
