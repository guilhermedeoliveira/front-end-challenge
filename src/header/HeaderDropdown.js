import React, { Component } from 'react';
import { array, string } from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { dropdownStyles } from './headerData';

class HeaderDropdown extends Component {
  static propTypes = {
    data: array.isRequired,
    placeholder: string.isRequired
  }

  state = { selectedOption: '' }

  handleChange = selectedOption => this.setState({ selectedOption });

  render() {
    const { data, placeholder } = this.props;
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="dropdown"
        style={dropdownStyles}
        clearable={false}
        options={data}
        value={value}
        onChange={this.handleChange}
        placeholder={placeholder}
      />
    );
  }
}

export default HeaderDropdown;
