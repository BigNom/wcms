import React, { Component } from 'react';
import styled from 'styled-components'

const Form = styled.form`
width: 200px;
`

class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  change = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      email: ""
    });
  };

  render() {
    return (
      <Form>
        <input 
        name="firstName"
        placeholder="First Name" 
        value={this.state.firstName} 
        onChange={e => this.change(e)} />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)} />
          <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)} />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
    </Form> 
    );
  }
}

export default ContactForm;