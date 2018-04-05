import React, { Component } from 'react';

import { Input } from './Form.styles';

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    value: ''
  }

  handleSubmit = (event) => {
    const { name, email, phone, value } = this.state;
    alert(`'name', ${name}, 'email', ${email}, 'phone', ${phone}, 'value', ${value}`);
    event.preventDefault();
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label for="cars">Escoha uma versão</label>
        <select name="cars">
          <option value="1.8">1.8</option>
          <option value="2.0">2.0</option>
          <option value="2.2">2.2</option>
        </select>
        <Input
          type="text"
          placeholder="Nome*"
          value={this.state.name}
          onChange={e => this.handleChange(e, 'name')}
        />
        <Input
          type="text"
          placeholder="E-mail*"
          value={this.state.email}
          onChange={e => this.handleChange(e, 'email')}
        />
        <Input
          type="text"
          placeholder="Telefone*"
          value={this.state.phone}
          onChange={e => this.handleChange(e, 'phone')}
        />
        <Input
          type="text"
          placeholder="Valor de entrada*"
          value={this.state.value}
          onChange={e => this.handleChange(e, 'value')}
        />
        <button onclick={this.handleSubmit}>
          SIMULAR FINANCIAMENTO
        </button>
      </form>
    );
  }
}

export default Form;
