import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

export const AccordionItem = styled.div`
  margin-bottom: 10px;

  @media (max-width: 1121px) {
   padding: 0 20px 0;
  }
`;

export const AccordionTitle = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 18px 30px;
  text-align: left;
  background: #f8f8f8;
  border: none;
  font-size: 18px;
  color: #705d56;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);

  &:hover {
    color: #C97C5D;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    flex: 1;
    text-align: left;
  }

  svg {
    margin-left: 10px;
  }
`;

export const AccordionContent = styled.div`
  padding: 15px 20px;
  background: white;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;
