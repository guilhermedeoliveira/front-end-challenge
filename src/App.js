import React from 'react';

import { LandingContainer } from './GlobalStyle';

import Header from './header/HeaderContainer';
// import Navbar from './navbar/NavbarContainer';

// import PromotionsContainer from './promotions/PromotionsContainer';
import PromotionsContainer from './promotions/PromotionsContainer';

// import MainContainer from './main/MainContainer';
import MainContainer from './main/MainContainer';

// import InfoContainer from './info/InfoContainer';
import InfoContainer from './info/InfoContainer';

// import CarouselContainer from './carousel/CarouselContainer';
import CarouselContainer from './carousel/CarouselContainer';

import FooterContainer from './footer/FooterContainer';

const App = () => (
  <LandingContainer>
    <Header />
    <MainContainer />
    <PromotionsContainer />
    <InfoContainer />
    <CarouselContainer />
    <FooterContainer />
  </LandingContainer>
);
  
export default App;
