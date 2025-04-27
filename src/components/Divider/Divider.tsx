import React from 'react';
import { Container, DividerSvg } from './Divider.styles';

const Divider = () => {
  return (
    <Container>
      <DividerSvg
        viewBox="0 0 350.43 45"
        fill="none"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <path
          d="M507.999,-14h350.428v46v0c-28.495,0-56.534,7.1538-81.546,20.8054-57.93,31.6183-128.699,31.3664-186.779.025C564.975,39.2712,536.551,32,507.999,32v0-46Z"
          transform="matrix(1 0 0 1 -507.999 -32.017)" 
          className="shape-fill"
          fill="#F0DCCA"
        />
        
        <path 
          d="M684.71,47.8893c-.779,1.2827-2.641,1.2827-3.42,0l-8.446-13.911c-.809-1.3328.151-3.0379,1.71-3.0379h16.892c1.559,0,2.519,1.7051,1.71,3.0379l-8.446,13.911Z" 
          transform="translate(-507.998993-17.769198)"
          fill="#1d1d1d"
          className="arrow-fill"
        />
      </DividerSvg>
    </Container>
  );
};

export default Divider;