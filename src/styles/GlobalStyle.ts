import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  body {
    height: 100vh;
    background: ${colors.background};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
