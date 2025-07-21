import React, { useEffect, useState } from 'react';
import { QuoteContainer } from './InspirationalQuote.styles';
import Typewriter from "typewriter-effect";

const InspirationalQuote = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QuoteContainer className={showQuote ? 'visible' : ''}>
      <Typewriter
        options={{
          strings: ['"Quando você começa a caminhar, o caminho aparece."'],
          autoStart: true,
          delay: 80,
          cursor: '', 
          loop: true,
          wrapperClassName: 'typewriter-wrapper', 
        }}
      />
    </QuoteContainer>
  );
};

export default InspirationalQuote;