import React, { Component } from 'react';

import NavbarDropdown from './NavbarDropdown.js';
import {
  Container,
  ImageGrandMotors
} from './Navbar.styles';

class CarouselContainer extends Component {
  render() {
    return (
      <Container>
        <ImageGrandMotors />
        <NavbarDropdown />
        <h3>aaaaaaaaaaaaaaaaaaaaaaaa</h3>
      </Container>
    );
  }
}

export default CarouselContainer;
