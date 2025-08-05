import styled from 'styled-components';

export const ContainerMain = styled.div`
  background-color: #B36A5E;
`;

export const ContactContainer = styled.section`
  width: 100%;
  background-color: #F0DCCA;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  border-top-right-radius: 80px;

  @media (max-width: 1160px) {
    gap: 4rem;
  }

  @media (max-width: 725px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .main-image {
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 1160px) {
      width: 290px;
    }
  }
`;

export const ContainerItens = styled.div``;

export const ContactItem = styled.div`
  .subtitle {
    color: #B36A5E;
    font-size: 1.5rem;
    font-family: 'Mansory', sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-size: 1.2rem;
    color: #4f4f4f;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 4px 0;
  }
`;


export const BrandIcon = styled.div`
  img {
    position: absolute;
    top: 340px;
    left: 320px;    
    animation: float 4s ease-in-out infinite;

    @media (max-width: 1160px) {
     display: none;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;


export const ContainerImage = styled.div`
  position: relative;
`;