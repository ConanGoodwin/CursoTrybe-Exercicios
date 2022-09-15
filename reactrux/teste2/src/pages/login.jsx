import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      sobrenome: ''
    }
  }

  changeHandle = ({target}) =>{
    this.setState({[target.name]: target.value});
  }
  render() {
    return (
      <form>
        <input type="text" name="nome" onChange={this.changeHandle} />
        <input type="text" name="sobrenome" onChange={this.changeHandle} />
      </form>
    );
  }
}