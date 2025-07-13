import styled from 'styled-components';

export const QuoteContainer = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #B36A5E;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  p {
  font-family: "Send Flowers", cursive;
  font-weight: 400;
  font-style: normal;

  }
`;