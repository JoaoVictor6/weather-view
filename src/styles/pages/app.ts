import styled, { keyframes } from 'styled-components';

const ldsRiple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Container = styled.main`
  height: 100vh;
  display: grid;
  place-content: center;

  background: grey;
`;

export const ContainerIfNotPermission = styled.main`
  height: 100vh;
  display: grid;
  place-content: center;

  background: #0E1213;

  .content{
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-weight: 400;
      text-align: center;
      font-size: clamp(4rem, 8rem + -17.8138vw, 1.5rem);
    }

    .load {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;

      & > div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
        animation: ${ldsRiple} 3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      
        &:nth-child(2) {
          animation-delay: -0.5s;
        }
      }
      
    }
  }
`;
