import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FooterContainer, Logo, SocialMedia, Developer, Container, Teste } from './Footer.styles';
import Brand from '../../assets/marca_dagua.png?url';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Teste>
    <FooterContainer>
      <Container>
      <Logo>
        <a href="/">
          <img src={Brand} alt="Logo" width={70} />
        </a>
      </Logo>
      <SocialMedia>
        <a href="https://instagram.com/instalaura" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} color='#B36A5E'/>
        </a>
        <a href="https://wa.me/numerolaura" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={32} color='#B36A5E'/>
        </a>
        <a href="mailto:emailaura@email.com">
          <HiOutlineMail size={32} color='#B36A5E'/>
        </a>
      </SocialMedia>
      </Container>
        <p>© {currentYear} Laura Lacerda  - CRP: 123456</p>
        <Developer>
        <a href="https://cecicaporale.com/" target='_blank'>Develop by @cecicaporale</a>
        </Developer>
    </FooterContainer>
    </Teste>
  );
};

export default Footer;
