import React, { Component } from 'react';
//import { withStyles } from 'material-ui/styles';
//import TextField from 'material-ui/TextField';
//import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Form extends React.Component {
  state = {
    name: "",
    lastName: "",
    email: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      lastName: "",
      email: "",
    })
  };

  render() {
    const classes = this.props.classes;

    return (
      <form>
        <TextField
          id="name"
          label="Name"
          name="name"
          defaultValue="First name"
          helperText="First name"
          value={this.state.name}
          onChange={e => this.change(e)}
          margin="normal"
        />

         <br/>
         <TextField
         name="lastName"
         lastName="lastName"
         label="Last Name"
         defaultValue="Last name"
         helperText="Last name"
         value={this.state.lastName}
         onChange={e => this.change(e)}
        />
        <br />
        <TextField
        name="email"
        label="Email"
        defaultValue="Email"
        helperText="Email"
        value={this.state.email}
        onChange={e => this.change(e)}
        />
        <br />
        <Button raised color="primary" className="raisedPrimary" label="Submit" onClick={e => this.onSubmit(e)}>Submit</Button>

      </form>
    );
  }
}

export default Form;