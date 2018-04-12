import React from 'react';

import { LandingContainer } from './GlobalStyle';

import HeaderContainer from './header/HeaderContainer';
import ShowcaseContainer from './showcase/ShowcaseContainer';
import CallContainer from './calls/CallContainer';
import VersionContainer from './versions/VersionContainer';
import CarContainer from './cars/CarContainer';
import FooterContainer from './footer/FooterContainer';

const App = () => (
  <LandingContainer>
    <HeaderContainer />
    <ShowcaseContainer />
    <CallContainer />
    <VersionContainer />
    <CarContainer />
    <FooterContainer />
  </LandingContainer>
);

export default App;
