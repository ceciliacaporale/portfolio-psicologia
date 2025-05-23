import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  background-color: #C97C5D;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 4rem;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;

  @media (max-width: 843px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 1160px) {
    gap: 1rem;
  }

  img {
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
    font-size: 2rem;
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
        margin-top: 8px;
        font-size: 14px;
      }

    }
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color: rgb(209, 209, 209);
  color: #705D56;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  gap: 8px;

  &:hover {
    background-color: #705D56;
    color: white;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
