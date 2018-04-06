import React, { Component } from 'react';

import FooterSocial from './FooterSocial';
import {
  Container,
  ContainerTop,
  ContainerTopCenter,
  ContainerTopCenterRow,
  ContainerBottom,
  TextFooter,
  Anchor,
  LogoGrandMotors,
  LogoAutoForce
} from './Footer.styles';

class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <ContainerTop>
          <LogoGrandMotors />
            <ContainerTopCenter>
              <TextFooter>
                &copy; Copyright 2015 - Cliente - Todos os direitos reservados.
              </TextFooter>
              <ContainerTopCenterRow>
                <Anchor>Visitar site</Anchor>
                <Anchor>Contato</Anchor>
                <Anchor>Política de Privacidade</Anchor>
              </ContainerTopCenterRow>
            </ContainerTopCenter>
          <FooterSocial />
        </ContainerTop>
        <ContainerBottom>
          <LogoAutoForce />
        </ContainerBottom>
      </Container>
    );
  }
};

export default FooterContainer;