import React from 'react';

import FormContainer from './FormContainer';
import Social from './Social';
import {
  Container,
  ContainerDescription,
  ContainerRight,
  SpanOldPrice,
  Model,
  Cambio,
  Phrase,
  OldPrice,
  NewPrice,
  Conditions,
  ContainerShare,
  TextLike,
  ContainerFacebook,
  TextIllustrativeImages
} from './Main.styles';

const MainContainer = () => (
  <Container>
    <FormContainer />
    <ContainerRight>
      <ContainerDescription>
        <Model>ETIOS HARCH 2017</Model>
        <Cambio>X 1.3 MANUAL</Cambio>
        <Phrase>Você tem mais para descobrir.</Phrase>
        <OldPrice>de <SpanOldPrice>R$ 44.120,00</SpanOldPrice></OldPrice>
        <NewPrice>por R$ 40.987,00</NewPrice>
        <Conditions>*Consulte as condições comerciais</Conditions>
        </ContainerDescription>
      <ContainerShare>
        <TextLike>Gostou? Então compartilhe.</TextLike>
        <ContainerFacebook>
          <Social text="Share" number="378k" />
          <Social text="Like" number="229k" />
        </ContainerFacebook>
        <TextIllustrativeImages>
          *Imagens meramente ilustrativas. Alguns ítens apresentados poderão não estar disponíveis nas versões. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificados sem avido prévio. Consulte e confirme todas as informações com um de nossos vendedores.
        </TextIllustrativeImages>
      </ContainerShare>
    </ContainerRight>
  </Container>
);

export default MainContainer;