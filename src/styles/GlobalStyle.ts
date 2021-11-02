import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
