import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .weather-section {
    padding: 8px 12px;
    background: rgba(250, 240, 237, 0.21);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    .temp {
      display: flex;
      align-items: center;
      font-size: 1.125rem;
      justify-content: center;
      gap: 12px;
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h1 {
        font-size: 1.625rem;
      }
    }
  }
`;
