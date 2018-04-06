import React from 'react';
import { string } from 'prop-types';

import {
  ContainerPromotion,
  Header,
  Main,
  Text
} from './Promotions.styles';

const Promotion = ({ header, main, text }) => (
  <ContainerPromotion>
    <Header>{header}</Header>
    <Main>{main}</Main>
    <Text>{text}</Text>
  </ContainerPromotion>
);

Promotion.propTypes = {
  header: string.isRequired
  main: string.isRequired
  text: string.isRequired
}

export default Promotion;