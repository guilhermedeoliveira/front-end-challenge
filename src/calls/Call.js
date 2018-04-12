import React from 'react';
import { string, bool } from 'prop-types';

import {
  ContainerCall,
  Header,
  Main,
  Text
} from './Call.styles';

const Call = ({
  header,
  main,
  text,
  isBordered
}) => (
  <ContainerCall isBordered={isBordered}>
    <Header>{header}</Header>
    <Main>{main}</Main>
    <Text>{text}</Text>
  </ContainerCall>
);

Call.propTypes = {
  header: string.isRequired, // eslint-disable-line
  main: string.isRequired, // eslint-disable-line
  text: string.isRequired, // eslint-disable-line
  isBordered: bool
};

Call.defaultProps = {
  isBordered: false
};

export default Call;
