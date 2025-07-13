import styled from 'styled-components';

export const Teste = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #EEE2DF;
  
  
  p {
    color: #705D56;
    font-weight: 100;
  }
  `;

export const FooterContainer = styled.footer`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;   
  align-items: center;
  padding: 20px;
  gap: 12px;
  text-align: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SocialMedia = styled.div`
  font-size: 24px;
  font-weight: bold;
  gap: 1rem;
  display: flex;
  margin-top: 25px;

  svg {
    background-color: white;
    border-radius: 10px;
    padding: 5px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;


export const Developer = styled.div`
  font-size: 10px;

  a {
    color: #EEE2DF;
    text-decoration: none;
  }
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

`;