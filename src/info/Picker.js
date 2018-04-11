import React, { Component } from 'react';

import {
  Option,
  Item,
  ContainerLeft,
  ContainerItem,
  Title
} from './Info.styles';

import { tableItems } from './infoData';
import styles from '../Style';

class Picker extends Component {
  onClickItem = item => alert(`Você escolheu o item ${item}`);

  renderItems() {
    return (
      tableItems.map((item, i) => (
        <Item
          key={i}
          style={{ color: i === 0 && styles.colors.white }}
          onClick={() => this.onClickItem(item.name)}
        >
          {item.name}
        </Item>
      ))
    );
  }

  render() {
    return (
      <ContainerLeft>
        <Title>Versões</Title>
        <ContainerItem>
          {this.renderItems()}
        </ContainerItem>
      </ContainerLeft>
    );
  }
}

export default Picker;
