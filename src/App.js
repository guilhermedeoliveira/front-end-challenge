import React, { Component } from 'react';

import PromotionsContainer from './promotions/PromotionsContainer';
import FooterContainer from './footer/FooterContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PromotionsContainer />
        <FooterContainer />
      </React.Fragment>
    );
  }
}

export default App;
