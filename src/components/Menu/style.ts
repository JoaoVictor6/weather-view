import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 18px; 
  color: #fff;
  h1 {
    font-weight: 600;
    font-size: 1.7rem;
    overflow-wrap: break-word;
  }
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
  button.hamburger-menu {
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;
