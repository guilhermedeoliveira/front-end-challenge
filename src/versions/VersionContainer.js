import React from 'react';

import Table from './Table';
import Picker from './Picker';
import SerieItems from './SerieItems';

import {
  Container,
  ContainerTop,
  ContainerBottom,
  ContainerTable,
  TableTitle,
  TitleSerieItems
} from './Version.styles';

const VersionContainer = () => (
  <Container>
    <ContainerTop>
      <Picker />
      <ContainerTable>
        <TableTitle>Informações Gerais</TableTitle>
        <Table />
      </ContainerTable>
    </ContainerTop>
    <ContainerBottom>
      <TitleSerieItems>Ítens de série</TitleSerieItems>
      <SerieItems />
    </ContainerBottom>
  </Container>
);

export default VersionContainer;
