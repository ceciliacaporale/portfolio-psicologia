import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
 width: 100%;
 background: #F0DCCA;
 height: auto;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 4rem;
 padding-top: 6rem;
 

 @media (max-width: 843px) {
    padding: 6rem 2rem;
 }

 @media (max-width: 1160px) {
    gap: 1rem;
 }

 img {
    border-radius: 30px;
    margin: 3rem 0 3rem 2rem;
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
max-width: 740px;


@media (max-width: 1344px) {
    padding: 0 2rem;
    max-width: 100%;
}

@media (max-width: 567px) {
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
`

export const Button = styled.a`
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #C97C5D;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 40px;
  justify-content: flex-start;
  display: inline-flex;

  gap: 8px;

  &:hover {
    background-color:rgb(170, 103, 76);
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
