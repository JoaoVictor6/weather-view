/* eslint-disable consistent-return */
import { useContext, useEffect, useRef } from 'react';
import { WeatherContext } from '../../App';
import { getLocalization, getWeather } from '../../utils/axios';
import { appearAnimation, disappearAnimation, Form } from './style';

interface SearchAddressProps {
  appear: boolean
  // eslint-disable-next-line react/require-default-props
  onSearch?: () => void
}

export default function SearchAddress({ appear, onSearch }:SearchAddressProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    if (appear) {
      formRef.current?.classList.add('flex');
      formRef.current?.classList.remove('disappear');
      formRef.current?.classList.add('appear');
      inputRef.current?.focus();
    } else {
      formRef.current?.classList.remove('appear');
      formRef.current?.classList.add('disappear');
    }

    formRef.current?.addEventListener('animationend', (e) => {
      if (e.animationName === disappearAnimation.getName()) {
        formRef.current?.classList.remove('flex');
        formRef.current?.classList.remove('disappear');
        return;
      }

      if (e.animationName === appearAnimation.getName()) {
        formRef.current?.classList.add('flex');
        formRef.current?.classList.remove('appear');
      }
    });

    return () => formRef.current?.removeEventListener('animationend', () => {});
  }, [appear]);

  async function weatherUpdate() {
    const { latitude, longitude } = await getLocalization(inputRef.current?.value as string);
    const response = await getWeather({ latitude, longitude });
    weatherContext?.setWeatherInfo(response);
    weatherContext?.setForecasts(response?.forecasts);
  }
  return (
    <Form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        weatherUpdate();
        // eslint-disable-next-line no-unused-expressions
        onSearch && onSearch();
      }}
    >
      <input ref={inputRef} type="text" placeholder="Search for any address" />
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
          <path fill="#fff" fillRule="evenodd" d="M5.555 4.455a7.7 7.7 0 1110.89 10.89L11 20.79l-5.445-5.445a7.7 7.7 0 010-10.89zM11 12.1a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4z" clipRule="evenodd" />
        </svg>
      </button>
    </Form>
  );
}
