import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <input name="name" type="text" value={this.state.name} onChange={this.onChangeHandler} />
        <h2>{this.state.inputValue}</h2>
        <input name="email" type="text" value={this.state.email} onChange={this.onChangeHandler} />
      </div>
    );
  }
}

export default Form;
