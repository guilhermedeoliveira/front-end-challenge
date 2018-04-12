import React, { Component } from 'react';

import NavbarDropdown from './NavbarDropdown.js';
import {
  Container,
  ContainerLogoGrandMotors,
  ContainerLogoToyota,
  ContainerMenu,
  Image,
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
          <a href="https://www.grandbrasil.com.br/toyota">
            <Image image={grandMotors} alt="Logo Grand Motors" scale={0.8} />
          </a>
        </ContainerLogoGrandMotors>
        <ContainerMenu>
          <NavbarDropdown data={cars} placeholder="NOSSOS VEÍCULOS" />
          <Services>SERVIÇOS</Services>        
          <NavbarDropdown data={sells} placeholder="VENDAS DIRETAS" />
          <NavbarDropdown data={phones} placeholder="TELEFONES" />
        </ContainerMenu>
        <ContainerLogoToyota>
          <a href="https://www.toyota.com.br/">
            <Image image={toyota} alt="Logo Toyota" scale={0.6} />
          </a>
        </ContainerLogoToyota>
      </Container>
    );
  }
}

export default CarouselContainer;
