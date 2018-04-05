import React, { Component } from 'react';

import Table from './Table';
import Picker from './Picker';
import SerieItems from './SerieItems';

import {
  Container,
  ContainerTop,
  ContainerBottom,  
  ContainerTable
} from './Info.styles';

class InfoContainer extends Component {
  render() {
    return (
      <Container>
        <ContainerTop>
          <Picker />
          <ContainerTable>
            <h3>Informações Gerais</h3>
            <Table />
          </ContainerTable>
        </ContainerTop>
        <ContainerBottom>
          <SerieItems />
        </ContainerBottom>
      </Container>
    );
  }
}

export default InfoContainer;
