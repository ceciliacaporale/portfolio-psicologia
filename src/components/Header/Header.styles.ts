import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Karla", sans-serif;
`;

export const Logo = styled.div`
`;

export const Content = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #C97C5D;
    font-size: 17px;
    font-weight: 100;

    &:hover {
      color: #B36A5E;
    }
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color: #705D56;
  color: white !important;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #B36A5E;
    color: white;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;

  div {
    height: 4px;
    background-color: #333;
    border-radius: 2px;
  }

  @media (max-width: 817px) {
    display: flex;
  }
`;

export const Menu = styled.div<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 4rem;

  a {
    color: #705D56;

    &:hover {
    color: #B36A5E;
  }
  }

  @media (max-width: 817px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #fff;  
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    a {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      font-weight: bold;
    }

    ${Button} {
      margin-top: 15px;
    }
  }
`;
