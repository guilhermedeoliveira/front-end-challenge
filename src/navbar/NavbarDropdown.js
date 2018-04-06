import React, { Component } from 'react';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';

const cars = [
    { label: 'ETIOS', value: 'Etios' },
    { label: 'COROLLA', value: 'Corolla' },
    { label: 'HILUX', value: 'Hilux' },
    { label: 'PRIUS', value: 'Prius' },
    { label: 'CAMRY', value: 'Camry' }
]

class NavbarDropdown extends Component {
  state = {
    car: null,
  }

  onChangeCar = (e) => this.setState({ car: e.value });

  render() {
    return (
      <Dropdown
        placeholder="NOSSOS VEÍCULOS"
        value={this.state.car}
        options={cars}
        onChange={this.onChangeCar}
        style={{ width:'350px' }}
      />
    );
  }
}
  
export default NavbarDropdown;
