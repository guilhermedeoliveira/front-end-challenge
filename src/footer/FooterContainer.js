import React, { Component } from 'react';

import FooterSocial from './FooterSocial';
import {
  Container,
  ContainerTop,
  ContainerTopCenter,
  ContainerTopCenterRow,
  ContainerBottom
} from './Footer.styles';

class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <ContainerTop>
          <h3>GRAND MOTORS</h3>
            <ContainerTopCenter>
              <h3>Copyright</h3>
              <ContainerTopCenterRow>
                <a href="#">Visitar site</a>
                <a href="#">Contato</a>
                <a href="#">Política de Privacidade</a>
              </ContainerTopCenterRow>
            </ContainerTopCenter>
          <FooterSocial />
        </ContainerTop>
        <ContainerBottom>
          <h4>auto force</h4>
        </ContainerBottom>
      </Container>
    );
  }
};

export default FooterContainer;