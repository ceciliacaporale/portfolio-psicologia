import styled from 'styled-components';

export const DoubtsContainer = styled.div`
 width: 100%;
 background-color: #C97C5D;
 border-top-left-radius: 80px;
 border-top-right-radius: 80px;
 display: flex;
 gap: 2rem;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 @media (max-width: 771px) {
   border-top-left-radius: 40px;
   border-top-right-radius: 40px;
 }

 h2 {
    font-size: 2rem;
     margin-top: 4rem;
    font-family: 'Mansory', sans-serif;
    color: #EEE2DF;
 }
`;

