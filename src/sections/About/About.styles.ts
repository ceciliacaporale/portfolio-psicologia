import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  background-color: #C97C5D;
  color: #000;
  display: flex;
  flex-direction: column;
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

  @media (min-width: 844px) {
    flex-direction: row-reverse;
    padding: 4rem 6rem;
    gap: 5rem;
  }

  @media (max-width: 1160px) {
    gap: 3rem;
  }

  .main-image {
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: auto;

    @media (max-width: 1021px) {
      width: 370px;
    }

    @media (max-width: 942px) {
      width: 350px;
    }

    @media (max-width: 893px) {
      width: 300px;
    }

    @media (max-width: 843px) {
      width: 400px;
    }

    @media (max-width: 434px) {
      width: 300px;
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
      align-items: center;
      gap: 8px;

      h3 {
        font-weight: 400;
        margin-top: 8px;
        font-size: 15px;
      }
    }
  }
`;

export const Button = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #EEE2DF;
  color: #705D56;
  border-radius: 5px;
  text-decoration: none;
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

    @media (max-width: 1021px) {
      width: 90px;
      height: 90px;
      top: 340px;
    }

    @media (max-width: 942px) {
      width: 70px;
      height: 70px;
      top: 300px;
    }

    @media (max-width: 843px) {
      width: 90px;
      height: 90px;
      top: 370px;
    }

    @media (max-width: 434px) {
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
