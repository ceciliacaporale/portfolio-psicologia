import React, { useEffect, useState } from 'react';
import { QuoteContainer } from './InspirationalQuote.styles';

const InspirationalQuote = () => {
    const [showQuote, setShowQuote] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setShowQuote(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <QuoteContainer className={showQuote ? 'visible' : ''}>
        <p>"Quando você começa a caminhar, o caminho aparece."</p>
      </QuoteContainer>
    );
  };
  
  export default InspirationalQuote;