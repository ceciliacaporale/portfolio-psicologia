import styled from 'styled-components';

export const ContainerMain = styled.div`
 background-color: #B36A5E;
`;

export const ContactContainer = styled.section`
  width: 100%;
  background-color: #EEE2DF;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  border-top-right-radius: 80px;

  .main-image {
     border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
`;

export const ContainerItens = styled.div`
  `;

export const ContactItem = styled.div`
  text-align: center;

  .subtitle {
   color: #B36A5E;
   font-size: 1.5rem;
   font-family: 'Mansory', sans-serif;
   margin-bottom: 10px;
   font-weight: bold;
  }

  a {
    color: #000;
  }

  p {
    font-size: 1.2rem;
    color: #4f4f4f;
    align-items: center;
    display: flex;
    margin: 4px 0;
    gap: 10px;
  }
`;

export const MapContainer = styled.div`
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
