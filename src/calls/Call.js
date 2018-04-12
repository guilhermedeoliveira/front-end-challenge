import React from 'react';
import { string, bool } from 'prop-types';

import {
  ContainerCall,
  Header,
  Main,
  Text
} from './Call.styles';

const Call = ({ header, main, text, isBordered }) => (
  <ContainerCall isBordered={isBordered}>
    <Header>{header}</Header>
    <Main>{main}</Main>
    <Text>{text}</Text>
  </ContainerCall>
);

Call.propTypes = {
  header: string.isRequired,
  main: string.isRequired,
  text: string.isRequired,
  isBordered: bool
};

Call.defaultProps = {
  isBordered: false
};

export default Call;