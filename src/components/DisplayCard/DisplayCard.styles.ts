import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  margin: 20px;
  transition: all 0.3s ease;

  h4 {
    font-size: 1.2rem;
    margin-top: 15px;
  }

  span {
    font-size: 1.1rem;
    color: #4f4f4f;
    margin-top: 10px;
  }

  svg {
    color: #B36A5E;
    font-size: 40px;
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
