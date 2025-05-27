import React from 'react';
import { ContactContainer, ContactItem, ContainerItens, MapContainer } from './Contact.styles';

const Contact = () => {
  return (
      <>
      <h3>Atendimento</h3><ContactContainer id="contato">
      <ContainerItens>
        <ContactItem>
          <h3>Horário</h3>
          <p>Segunda à Sexta</p>
          <p>07:00 às 11:00</p>
        </ContactItem>

        <ContactItem>
          <h3>Serviços</h3>
          <p>Psicoterapia individual presencial e online</p>
        </ContactItem>

        <ContactItem>
          <h3>Contato</h3>
          <p>Telefone: (34) 9...</p>
          <p>Email: psi.lauralacerda@gmail.com</p>
        </ContactItem>

      </ContainerItens>
      <ContactItem>
        <h3>Endereço</h3>
        <p>Espaço Luminar</p>
        <p>Avenida Getúlio Vargas, 275, Centro, Uberlândia - MG</p>
        <p>38400-299, Brasil</p>

        <MapContainer>
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
        </MapContainer>
      </ContactItem>
    </ContactContainer>
    </>
  );
};

export default Contact;