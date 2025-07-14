import { useState } from 'react';
import { HeaderContainer, Content, Logo, RightSide, Nav, Button, Hamburger, Menu } from './Header.styles';
import MainLogo from "../../assets/logo_laurapsicologa2.png?url";
import MobileLogo from "../../assets/marca_dagua.png?url";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <HeaderContainer>
      <Content>
      <Logo>
        <a href="/">
        <img src={MainLogo} alt="Logo Psicóloga Laura" width={260} loading="lazy" className="desktop-logo" />
        <img src={MobileLogo} alt="Logo Psicóloga Laura" width={60} loading="lazy" className="mobile-logo" />
        </a>
      </Logo>
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
          <Button href="https://wa.me/5534984146045?text=Oi%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es%20de%20terapia" target='_blank'>Agende sua sessão</Button>
        </Menu>
      </RightSide>
      </Content>
    </HeaderContainer>
  );
}

export default Header;
