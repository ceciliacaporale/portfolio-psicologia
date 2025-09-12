import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SlLocationPin } from "react-icons/sl";

import {
  FooterWrapper,
  FooterContainer,
  Logo,
  SocialMedia,
  Copy,
  Developer,
  TopRow,
  ContainerBackground
} from './Footer.styles';

import Brand from '../../assets/marca_dagua.png?url';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <ContainerBackground>
    <FooterWrapper>
      <FooterContainer>
        <TopRow>
          <Logo>
            <a href="/">
              <img src={Brand} alt="Logo Laura" />
            </a>
          </Logo>

          <SocialMedia>
            <a href="https://www.instagram.com/luminar.saudemental/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} color="#C97C5D" />
            </a>
            <a href="https://wa.me/5534984146045?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20psicoterapia." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={32} color="#C97C5D" />
            </a>
            <a href="mailto:psi.lauralacerda@gmail.com">
              <HiOutlineMail size={32} color="#C97C5D" />
            </a>
            <a
              href="https://www.google.com/maps/place/Av.+Getúlio+Vargas,+275+-+Centro,+Uberlândia+-+MG,+38400-299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlLocationPin size={32} color="#C97C5D" />
            </a>
          </SocialMedia>
        </TopRow>

        <Copy>© {currentYear} Laura Lacerda - CRP: 04/80236</Copy>

        <Developer>
          <a href="https://cecicaporale.com/" target="_blank" rel="noopener noreferrer">
            Develop by @cecicaporale
          </a>
        </Developer>
      </FooterContainer>
    </FooterWrapper>
    </ContainerBackground>
  );
};

export default Footer;
