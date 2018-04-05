import React, { Component } from 'react';

import PromotionsContainer from './promotions/PromotionsContainer';
import FooterContainer from './footer/FooterContainer';
import FormContainer from './form/FormContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormContainer />
        <PromotionsContainer />
        <FooterContainer />
      </React.Fragment>
    );
  }
}

export default App;
