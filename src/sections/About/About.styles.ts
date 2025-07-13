import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  background-color:#C97C5D;
  height: auto;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 4rem;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;

   @media (max-width: 556px) {
      border-bottom-right-radius: 6%;
      border-bottom-left-radius: 6%;
    }


  @media (max-width: 843px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 1160px) {
    gap: 1rem;
  }

  .main-image {
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    @media (max-width: 843px) {
      display: none;
    }

    @media (max-width: 1160px) {
      width: 390px;
      height: 500px;
    }
  }
`;

export const ContainerText = styled.div`
  max-width: 700px;
  font-size: 1rem;

  h2 {
    font-size: 2.2rem;
    font-family: 'Mansory', sans-serif;
  }
  p {
    margin-top: 20px;
  }

  .services {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 1rem;

    .service {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      text-align: center;

      h4 {
        font-weight: 400;
        margin-top: 8px;
        font-size: 15px;
      }
    }
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color: #EEE2DF;
  color: #705D56;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  gap: 8px;

  &:hover {
    background-color: #B36A5E;
    color: white;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const BrandIcon = styled.div`
 img {
  position: absolute;
  right: -30px;
  top: 370px;
  
  animation: float 4s ease-in-out infinite;
   @media (max-width: 843px) {
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
