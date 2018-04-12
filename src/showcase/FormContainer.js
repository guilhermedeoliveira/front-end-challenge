import React from 'react';

import Form from './Form';
import {
  Container,
  ContainerHeader,
  Header,
  SubHeader,
  ContainerForm,
  HR,
  Text
} from './Form.styles';

const FormContainer = () => (
  <Container>
    <ContainerHeader>
      <Header>SIMULAR FINANCIAMENTO</Header>
      <SubHeader>Escolha a parcela que cabe no seu bolso</SubHeader>
      <HR />
    </ContainerHeader>
    <ContainerForm>
      <Form />
    </ContainerForm>
    <Text>Política de Privacidade</Text>
  </Container>
);

export default FormContainer;
