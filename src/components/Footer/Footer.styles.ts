import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
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
    color: #333;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color:rgb(209, 209, 209);
  color: #705D56;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #705D56;
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
