import React, { Component } from 'react';

import Carousel from './Carousel';
import {
  Container,
  TextMeetOurCars,
  HrCarousel
} from './Carousel.styles';

class CarouselContainer extends Component {
  render() {
    return (
      <Container>
        <TextMeetOurCars>Conheça nossos carros</TextMeetOurCars>
        <HrCarousel />
        <Carousel />
      </Container>
    );
  }
}

export default CarouselContainer;
