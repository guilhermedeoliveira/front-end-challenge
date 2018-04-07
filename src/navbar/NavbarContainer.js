import React, { Component } from 'react';

import NavbarDropdown from './NavbarDropdown.js';
import {
  Container,
  ImageGrandMotors,
  Dropdown,
  Services
} from './Navbar.styles';

import { cars, sells, phones } from './navbarData';

class CarouselContainer extends Component {
  render() {
    return (
      <Container>
        <ImageGrandMotors />
        <NavbarDropdown data={cars} />
        <Services>Serviços</Services>
        <NavbarDropdown data={sells} />
        <NavbarDropdown data={phones} />
      </Container>
    );
  }
}

export default CarouselContainer;
