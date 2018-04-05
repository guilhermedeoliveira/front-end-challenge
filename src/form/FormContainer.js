import React, { Component } from 'react';

import Form from './Form';
import {
  Container
} from './Form.styles';

class FormContainer extends Component {
  render() {
    return (
      <Container>
        <Form />
      </Container>
    );
  }
}

export default FormContainer;
