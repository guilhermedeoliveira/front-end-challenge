import React, { Component } from 'react';

import PromotionsContainer from './promotions/PromotionsContainer';
import FooterContainer from './footer/FooterContainer';
import FormContainer from './form/FormContainer';
import InfoContainer from './info/InfoContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormContainer />
        <PromotionsContainer />
        <InfoContainer />
        <FooterContainer />
      </React.Fragment>
    );
  }
}

export default App;
