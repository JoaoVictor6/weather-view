import styled, { keyframes } from 'styled-components';

export const appearAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const disappearAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

export const Form = styled.form`
  display: none;
  align-items: center;
  position: absolute;
  top: calc(90%);
  * {color: #fff;}
  background: rgba(250, 240, 237, 0.13);
  padding: 0.75rem 1rem;
  width: calc(100% - 32px);
  border-radius: 4px;
  
  &.flex {
    display: flex;
  }
  &.appear {
    animation: ${appearAnimation} ease-in-out 0.1s;
  }

  &.disappear{
    animation: ${disappearAnimation} ease-in-out 0.1s;
  }
  input {
    width: 100%;
    font-size: 1.375rem;

    &::placeholder{
      color: #8A9299;
    }
  }
`;
