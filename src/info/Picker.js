import React, { Component } from 'react';

import { Option, Item } from './Info.styles';

import { tableItems } from './infoData';

class Picker extends Component {
  onClickItem = item => alert(`Você escolheu o item ${item}`);

  renderItems() {
    return (tableItems.map(item => (
      <Option>
          <Item onClick={() => this.onClickItem(item.name)}>{item.name}</Item>
      </Option>
    ))
  )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderItems()}
      </React.Fragment>
    );
  }
}

export default Picker;
