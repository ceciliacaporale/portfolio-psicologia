import { useState } from 'react';
import { HeaderContainer, Content, Logo, RightSide, Nav, Button, Hamburger, Menu } from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <HeaderContainer>
      <Content>
      <Logo>psi.laura</Logo>
      <RightSide>
        <Hamburger onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <Menu menuOpen={menuOpen}>
          <Nav>
            <a href="#sobre">Sobre mim</a>
            <a href="#abordagem">Abordagem</a>
            <a href="#contato">Contato</a>
            <a href="#duvidas">Dúvidas</a>
          </Nav>
          <Button href="#contato">Agende sua sessão</Button>
        </Menu>
      </RightSide>
      </Content>
    </HeaderContainer>
  );
}

export default Header;
