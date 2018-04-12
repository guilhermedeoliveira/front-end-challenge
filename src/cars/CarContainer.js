import React from 'react';

import Car from './Car';
import {
  Container,
  TextMeetOurCars,
  HrCar
} from './Car.styles';

const CarContainer = () => (
  <Container>
    <TextMeetOurCars>Conheça nossos carros</TextMeetOurCars>
    <HrCar />
    <Car />
  </Container>
);

export default CarContainer;
