import { useState } from 'react';
import { FooterContainer, Logo, RightSide, Nav, Button, Hamburger, Menu } from './Footer.styles';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}

export default Footer;
