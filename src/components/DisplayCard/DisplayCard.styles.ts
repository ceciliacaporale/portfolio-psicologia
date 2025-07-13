import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 1rem;
  scroll-behavior: smooth;
  width: 100%;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 280px;
  scroll-snap-align: start;
  background-color: #EEE2DF;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  svg {
    font-size: 40px;
    color: #C97C5D;
  }

  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #B36A5E;
  }

  span {
    font-size: 1rem;
    color: #4f4f4f;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1rem;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#B36A5E' : '#ccc')};
  cursor: pointer;
`;
