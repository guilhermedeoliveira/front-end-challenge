import React from 'react';

import { LandingContainer } from './GlobalStyle';

import HeaderContainer from './header/HeaderContainer';
import ShowcaseContainer from './showcase/ShowcaseContainer';
import CallContainer from './call/CallContainer';
import VersionContainer from './version/VersionContainer';

// import CarouselContainer from './carousel/CarouselContainer';
import CarouselContainer from './carousel/CarouselContainer';

import FooterContainer from './footer/FooterContainer';

const App = () => (
  <LandingContainer>
    <HeaderContainer />
    <ShowcaseContainer />
    <CallContainer />
    <VersionContainer />
    <CarouselContainer />
    <FooterContainer />
  </LandingContainer>
);
  
export default App;
