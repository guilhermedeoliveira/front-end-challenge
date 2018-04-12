import React from 'react';

import { LandingContainer } from './GlobalStyle';

import HeaderContainer from './header/HeaderContainer';

// import PromotionsContainer from './promotions/PromotionsContainer';
import PromotionsContainer from './promotions/PromotionsContainer';

import ShowcaseContainer from './showcase/ShowcaseContainer';

// import InfoContainer from './info/InfoContainer';
import InfoContainer from './info/InfoContainer';

// import CarouselContainer from './carousel/CarouselContainer';
import CarouselContainer from './carousel/CarouselContainer';

import FooterContainer from './footer/FooterContainer';

const App = () => (
  <LandingContainer>
    <HeaderContainer />
    <ShowcaseContainer />
    <PromotionsContainer />
    <InfoContainer />
    <CarouselContainer />
    <FooterContainer />
  </LandingContainer>
);
  
export default App;
