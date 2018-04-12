import React, { Component } from 'react';

import Car from './Car';
import {
  Container,
  TextMeetOurCars,
  HrCar
} from './Car.styles';

class CarContainer extends Component {
  render() {
    return (
      <Container>
        <TextMeetOurCars>Conheça nossos carros</TextMeetOurCars>
        <HrCar />
        <Car />
      </Container>
    );
  }
}

export default CarContainer;
