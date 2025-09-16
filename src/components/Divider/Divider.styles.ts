import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
`;

export const Container = styled.div`
  z-index: 99;
  margin: 0 auto;
  width: 100%;
  max-width: 350.43px;
  height: 0;
  text-align: center;
  position: relative;
  transform: translateZ(0); 

  .transparent-button {
    margin: 0 auto;
    background: none;
    border: none;
    cursor: pointer;
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DividerSvg = styled.svg`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 5px;
  position: relative;

  .arrow-fill {
    animation: ${bounce} 1.2s ease-in-out infinite;
    transform-origin: center;
  }
`;
