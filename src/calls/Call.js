import React from 'react';
import propTypes from 'prop-types';

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
  header: propTypes.string.isRequired,
  main: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  isBordered: propTypes.bool
};

Call.defaultProps = {
  isBordered: false
};

export default Call;
