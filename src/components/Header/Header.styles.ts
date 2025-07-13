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

  @media (max-width: 560px) {
    padding: 5px;
  }

    @media (max-width: 1037px) {
    padding: 8px 20px;
  }
`;

export const Logo = styled.div`
  .mobile-logo {
    display: none;
  }

  @media (max-width: 1037px) {
    .desktop-logo {
      display: none;
    }

    .mobile-logo {
      display: block;
    }
  }
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
  @media (max-width: 817px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;

    a {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
  }
`;


export const Button = styled.a`
  padding: 10px 20px;
  background-color: #C97C5D;
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
  width: 25px;
  height: 20px;
  cursor: pointer;

  div {
    height: 3px;
    background-color: #B36A5E;
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

  @media (max-width: 817px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 45px;
    right: -40px;
    background-color: white;
    padding: 20px;
    width: 100vw;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 99;

    ${Button} {
      align-self: stretch;
      text-align: center;
      margin-top: 10px;
    }
  }
`;