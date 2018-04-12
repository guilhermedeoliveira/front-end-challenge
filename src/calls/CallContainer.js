import React, { Component } from 'react';

import Call from './Call';
import {
  Container
} from './Call.styles';

import data from './callData';

class CallContainer extends Component {
  render() {
    return (
      <Container>
        {data.map((prom, i) => (
          <Call
            isBordered={i === 1}
            key={prom.header}
            header={prom.header}
            main={prom.main}
            text={prom.text}
          />
        ))}
      </Container>
    );
  }
};

export default CallContainer;