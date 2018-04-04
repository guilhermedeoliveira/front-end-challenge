import React from 'react';

import {
  ContainerPromotion    
} from './Promotions.styles';

const Promotion = ({ header, main, text }) => (
  <ContainerPromotion>
    <h1>{header}</h1>
    <h1>{main}</h1>
    <p>{text}</p>
  </ContainerPromotion>
);

export default Promotion;