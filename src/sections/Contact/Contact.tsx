import React from 'react';
import {
  ContactContainer,
  ContactItem,
  ContainerItens,
  ContainerMain,
  BrandIcon,
  ContainerImage
} from './Contact.styles';
import { LuClock8 } from 'react-icons/lu';
import { BsTelephone, BsHouseHeart } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { GoComment } from 'react-icons/go';
import LauraPsi from '../../assets/Laura_Lacerda_239.jpeg?url';
import Brand from '../../assets/brand-psi.png?url';

const iconColor = '#B36A5E';

const Contact = () => {
  return (
    <ContainerMain>
      <ContactContainer id="contato" as="section">
        <ContainerImage>
        <img
          src={LauraPsi}
          alt="Psicóloga Laura Lacerda"
          width={400}
          height={355}
          loading="lazy"
          className="main-image"
          />
        <BrandIcon>
          <img
            src={Brand}
            alt="Ícone da Psicologia"
            width={110}
            height={110}
            loading="lazy"
            className="mobile-image"
            />
        </BrandIcon>
        </ContainerImage>
        <ContainerItens>
          <ContactItem as="address">
            <p className="subtitle">Atendimento:</p>
            <p>
              <LuClock8 color={iconColor} />
              Seg - Sex: 8:00h - 19:00h
            </p>
            <p>
              <BsTelephone color={iconColor} />
             <a href="tel:+5534984146045">Telefone: (34) 98414-6045</a>
            </p>
            <p>
              <GoComment color={iconColor} />
              Online e Presencial
            </p>
            <a
              href="https://www.instagram.com/luminar.saudemental/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <BsHouseHeart color={iconColor} />
                Espaço Luminar
              </p>
            </a>
            <p>
              <SlLocationPin color={iconColor} />
              Avenida Getúlio Vargas, 275, Centro - Uberlândia
            </p>
          </ContactItem>
        </ContainerItens>
      </ContactContainer>
    </ContainerMain>
  );
};

export default Contact;
