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

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.main`
  height: 100vh;
  display: grid;
  place-content: center;
  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  
  section {
    animation: ${appear} .5s;
    user-select: none;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 0 98px 0 64px;
    header {
      h1 {
        color: #fff;
        font-size: 64px;
      }
      h2 {
        color: rgba(255,255,255,.62);
        font-size: 32px;
        font-weight: 400;
      }
    }

    div {
      color: #fff;
      h1.temp {
        font-size: 148px;
      }
      h2.humidity {
        color: rgba(255,255,255,.62);
        font-weight: 400;
        font-size: 32px;
      }
    }
  }
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
