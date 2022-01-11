import styled from 'styled-components';
import colors from '../colors';

export const Container = styled.main`
  &, * {
    color: #fff;
  }
  height: 100vh;

  header {
    border-bottom: 1px solid #2F404D;
  }

  .header__title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;

    h1 {
      font-weight: 700;
      font-size: 8em;
    }

    img {
      width: 80%;
    }
  }

  .header__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
    color: ${colors.textColor};
    p {
      color: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      img {
        width: 2rem;
      }
    }
  }
`;
