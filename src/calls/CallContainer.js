import React from 'react';

import Call from './Call';
import { Container } from './Call.styles';

import data from './callData';

const CallContainer = () => (
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

export default CallContainer;
