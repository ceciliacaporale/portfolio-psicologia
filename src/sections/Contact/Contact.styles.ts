import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  background-color: #fefefe;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ContainerItens = styled.div`
display: column;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #C97C5D;
  margin-bottom: 2rem;
`;

export const ContactItem = styled.div`
  text-align: center;

  h3 {
    font-size: 1.6rem;
    color: #705D56;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #4f4f4f;
    margin: 4px 0;
  }
`;

export const MapContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 600px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
