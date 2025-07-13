import React from 'react';
import { ContactContainer, ContactItem, ContainerItens, MapContainer, ContainerMain } from './Contact.styles';
import { LuClock8 } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsHouseHeart } from "react-icons/bs";
import LauraPsi from "../../assets/Laura_Lacerda_239.jpg?url";
import { GoComment } from "react-icons/go";

const Contact = () => {
  return (
      <>
      <ContainerMain>
    <ContactContainer id="contato">
        <img
          src={LauraPsi}
          alt="Psicóloga Laura Lacerda"
          width={400}
          loading="lazy"
          className="main-image"
        />
      <ContainerItens>
        <ContactItem>
          <p className='subtitle'>Atendimento:</p>
          <p><LuClock8 color='#B36A5E' />Seg - Sex: 9:00h - 18:00h</p>
          <p><BsTelephone color='#B36A5E'/> Telefone: (34) 999999</p>
          <p><GoComment color='#B36A5E'/>Online e Presencial</p>
          <a href="https://www.instagram.com/luminar.saudemental/" target='_blank'>
          <p><BsHouseHeart color='#B36A5E'/>Espaço Luminar</p>
          </a>
          <p><SlLocationPin color='#B36A5E' width={32} height={32}/>Avenida Getúlio Vargas, 275, Centro - Uberlândia</p>
        </ContactItem>

      </ContainerItens>
      <ContactItem>

        {/* <MapContainer>
          <iframe
            title="Localização - Espaço Luminar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.201761648624!2d-48.28788052576245!3d-18.919476155404004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445ad1a9c1e63%3A0x7c5a1ffbd3281db7!2sAv.%20Get%C3%BAlio%20Vargas%2C%20275%20-%20Centro%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-299%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1714842039928!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer> */}
      </ContactItem>
    </ContactContainer>
    </ContainerMain>

    </>
  );
};

export default Contact;