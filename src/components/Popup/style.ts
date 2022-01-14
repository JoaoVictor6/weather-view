import styled, { css, keyframes } from 'styled-components';
import { PopupProps, TypeMessages } from '.';

const background:Record<TypeMessages, string> = {
  warning: '',
  error: '#F73155',
};

const notifyAppear = keyframes`
  0% {
    display: flex;
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PopupContainer = styled.section`
  ${({ type }: Pick<PopupProps, 'type'>) => css`
    background: ${background[type]}
  `};
  color: #fff;
  
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 4px 0;

  &.appear {
    animation: ${notifyAppear} .3s ease-in-out;
  }
`;
