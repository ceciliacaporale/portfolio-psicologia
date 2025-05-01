import styled from 'styled-components';

export const QuoteContainer = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #705d56;
  border-radius: 10px;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    font-style: italic;
  }
`;