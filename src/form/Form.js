import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

import {
  ContainerCheckbox,
  Label,
  Option,
  Select,
  Input,
  HR,
  Button,
  StyledRadioGroup,
  StyledRadio
} from './Form.styles';

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    value: '',
    checkbox: false,
    radio: 12
  }

  handleSubmit = (event) => {
    const { name, email, phone, value } = this.state;
    alert(`'name', ${name}, 'email', ${email}, 'phone', ${phone}, 'value', ${value}`);
    event.preventDefault();
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  handleCheckbox = () => this.setState(prevState => ({ checkbox: !prevState.checkbox }));

  handleRadio = radio => this.setState({ radio });

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Label htmlFor="cars">Escolha uma versão</Label>
        </div>
        <HR />
        <Select name="cars">
          <Option value="1.8">1.8</Option>
          <Option value="2.0">2.0</Option>
          <Option value="2.2">2.2</Option>
        </Select>
        <div>
          <Input
            type="text"
            placeholder="Nome*"
            value={this.state.name}
            onChange={e => this.handleChange(e, 'name')}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="E-mail*"
            value={this.state.email}
            onChange={e => this.handleChange(e, 'email')}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Telefone*"
            value={this.state.phone}
            onChange={e => this.handleChange(e, 'phone')}
          />
        </div>
        <Label>Números de parcelas*</Label>
        <StyledRadioGroup
          name="installments"
          selectedValue={this.state.radio}
          onChange={this.handleRadio}
        >
          <StyledRadio value={12} />12
          <StyledRadio value={24} />24
          <StyledRadio value={36} />36
          <StyledRadio value={48} />48
        </StyledRadioGroup>
        <div>
          <Input
            type="text"
            placeholder="Valor de entrada*"
            value={this.state.value}
            onChange={e => this.handleChange(e, 'value')}
          />
        </div>
        <ContainerCheckbox>
          <input
            id="ck"
            type="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleCheckbox}
          />
          <Label htmlFor="ck">Desejo receber ofertas excusivas da PG Prime</Label>
        </ContainerCheckbox>
        <Button onclick={this.handleSubmit}>
          SIMULAR FINANCIAMENTO
        </Button>
      </form>
    );
  }
}

export default Form;
