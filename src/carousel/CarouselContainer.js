import React, { Component } from 'react';

import Carousel from './Carousel';
import {
  Container
} from './Carousel.styles';

class CarouselContainer extends Component {
  render() {
    return (
      <Container>
        <Carousel />
      </Container>
    );
  }
}

export default CarouselContainer;
