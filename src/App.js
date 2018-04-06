import React, { Component } from 'react';

import { MainContainer } from './GlobalStyle';

import Navbar from './navbar/NavbarContainer';
import PromotionsContainer from './promotions/PromotionsContainer';
import FooterContainer from './footer/FooterContainer';
import FormContainer from './form/FormContainer';
import InfoContainer from './info/InfoContainer';
import CarouselContainer from './carousel/CarouselContainer';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Navbar />
        <FormContainer />
        <PromotionsContainer />
        <InfoContainer />
        <CarouselContainer />
        <FooterContainer />
      </MainContainer>
    );
  }
}

export default App;
