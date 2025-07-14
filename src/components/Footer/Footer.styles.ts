import styled from 'styled-components';

export const ContainerBackground = styled.div`
  background-color: white;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #EEE2DF;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;

  @media (max-width: 568px) {
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  img {
    width: 70px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    background-color: white;
    border-radius: 10px;
    padding: 6px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Copy = styled.p`
  color: #C97C5D;
  font-weight: 100;
  font-size: 0.95rem;
  text-align: center;
`;

export const Developer = styled.div`
  font-size: 0.75rem;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 100;

    &:hover {
      text-decoration: underline;
    }
  }
`;
