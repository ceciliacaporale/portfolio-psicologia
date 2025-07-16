import styled from 'styled-components';

export const QuoteContainer = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #B36A5E;
  background-color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

.Typewriter {
    font-family: "Send Flowers", cursive;
    font-weight: 400;
    font-style: normal;
    color: inherit;
    font-size: inherit;
  }
`;