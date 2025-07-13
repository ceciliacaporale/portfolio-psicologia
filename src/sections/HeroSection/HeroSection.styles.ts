import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
  width: 100%;
  background: #EEE2DF;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 6rem;

  @media (max-width: 843px) {
    padding: 6rem 2rem;
  }

  img {
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 3rem 0 3rem 2rem;
    width: 470px;

    @media (max-width: 841px) {
      display: none;
    }

    @media (max-width: 1160px) {
      width: 390px;
      margin-top: 1rem;
    }

    @media (max-width: 845px) {
      width: 200px;
    }
  }
`;

export const ContainerText = styled.div`
  max-width: 740px;

  @media (max-width: 1303px) {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 843px) {
    padding: 0;
  }

  h1 {
    font-size: 3rem;
    color: #705D56;
    font-family: 'Mansory', sans-serif;
  }

  p {
    font-size: 1.2rem;
    margin-top: 20px;
  }
`;

export const Button = styled.a`
  margin-top: 40px;
  padding: 20px 30px;
  background-color: #C97C5D;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  max-width: 280px;
  gap: 8px;

  &:hover {
    background-color: rgb(170, 103, 76);
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
