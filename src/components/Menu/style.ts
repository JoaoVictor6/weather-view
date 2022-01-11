import styled from 'styled-components';

export const Nav = styled.nav`
  .line {
    width: 32px;
    height: 4px;
    background: #fff;
    border-radius: 8px;
    position: relative;
    transition: all .3s ease-in-out;
    &::before, &::after {
      content: "";
      width: 32px;
      height: 4px;
      background: #fff;
      border-radius: 8px;
      position: absolute;
      left: 0;
      transition: all .3s ease-in-out;
    }

    &::before {
      transform: translateY(-10px);
    }
    &::after {
      transform: translateY(10px);
    }
  }
  .line.open {
      transform: translateX(-50px);
      background: none;

      &::before {
        transform: rotate(45deg) translate(35px, -35px);
      }
      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    }
  button {
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
`;
