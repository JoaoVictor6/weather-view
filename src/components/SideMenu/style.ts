import styled from 'styled-components';

export const Menu = styled.menu`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(54, 66, 77, 0.63);
  transform: translateX(-100%);
  width: 30vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 16px;
  padding-top: 3rem;

  transition: all .3s;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .btn-list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    width: 100%;
    padding: .7rem 1rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    transition: all .2s;

    h1{
      font-size: 2rem;
    }
    h2 {
      font-weight: 700;
      font-size: 1rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.27);
    }
  }
  .btn-new {
    justify-content: center;
    h1{
      display: flex;
      align-items: center;
      
      svg {
        width: 2rem;
      }
      font-size: 1.7rem;
    }
  }
  &.open {
    transform: translateY(0);
  }
`;
