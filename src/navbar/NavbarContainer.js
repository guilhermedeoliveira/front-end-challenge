import React, { Component } from 'react';

import NavbarDropdown from './NavbarDropdown.js';
import {
  Container,
  ContainerLogoGrandMotors,
  ContainerLogoToyota,
  ContainerMenu,
  Image,
  Dropdown,
  Services
} from './Navbar.styles';

import { cars, sells, phones } from './navbarData';

import grandMotors from '../assets/images/logo-grand-motors-production.png';
import toyota from '../assets/images/logo-toyota-branca.png';

class CarouselContainer extends Component {
  render() {
    return (
      <Container>
        <ContainerLogoGrandMotors>
          <Image image={grandMotors} alt="Logo Grand Motors" scale={0.8} />
        </ContainerLogoGrandMotors>
        <ContainerMenu>
          <NavbarDropdown data={cars} />
          <Services>SERVIÇOS</Services>        
          <NavbarDropdown data={sells} />
          <NavbarDropdown data={phones} />
        </ContainerMenu>
        <ContainerLogoToyota>
          <Image image={toyota} alt="Logo Toyota" scale={0.6} />
        </ContainerLogoToyota>
      </Container>
    );
  }
}

export default CarouselContainer;
