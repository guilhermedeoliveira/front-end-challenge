import React, { Component } from 'react';

import Promotion from './Promotion';
import {
  Container
} from './Promotions.styles';

import data from './PromotionsData';

class PromotionsContainer extends Component {
  render() {
    return (
      <Container>
        {data.map((prom, i) => (
          <Promotion
            isBordered={i === 1}
            key={prom.header}
            header={prom.header}
            main={prom.main}
            text={prom.text}
          />
        ))}
      </Container>
    );
  }
};

export default PromotionsContainer;