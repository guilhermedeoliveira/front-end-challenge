import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { dropdownStyles } from './navbarData';

class NavbarDropdown extends Component {
  state = { selectedOption: '' }

  handleChange = (selectedOption) => this.setState({ selectedOption });

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="dropdown"
        style={dropdownStyles}
        clearable={false}
        options={this.props.data}
        value={value}
        onChange={this.handleChange}
        placeholder="NOSSOS VEÍCULOS"
      />
    );
  }
}
  
export default NavbarDropdown;
