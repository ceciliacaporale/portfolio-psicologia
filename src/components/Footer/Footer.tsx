import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FooterContainer, Logo, SocialMedia, Developer } from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Logo>psi.laura</Logo>
      <SocialMedia>
        <a href="https://instagram.com/instalaura" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://wa.me/numerolaura" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
        <a href="mailto:emailaura@email.com">
          <HiOutlineMail size={24} />
        </a>
      </SocialMedia>
        <p>© {currentYear} Laura Lacerda  - CRP: 123456. Todos os direitos reservados.</p>
        <Developer>
        <a href="https://cecicaporale.com/">Develop by @cecicaporale</a>
        </Developer>
    </FooterContainer>
  );
};

export default Footer;
