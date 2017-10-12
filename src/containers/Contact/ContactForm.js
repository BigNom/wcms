import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

const encode = (data) => {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Thankyou for sending a message, we will be in touch shortly"))
      .catch(error => alert(error));
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  handleChange = e => {
    this.setState({ 
    [e.target.name] : e.target.value 
   });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form 
      name="contact" 
      method="post" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field" 
      onSubmit={e => this.handleSubmit(e)}> 
      <input 
      type="hidden" 
      name="form-name" 
      value="contact" 
      />

      <div className="form-group">
          <label htmlFor="nameInput">
            First Name
            <input 
            className="form-control"
            id="nameInput"
            placeholder="Name"
            type="text" 
            name="name" 
            value={name} 
            onChange={e => this.handleChange(e)} />
          </label>
          </div>

        <div className="form-group">
          <label htmlFor="emailInput">
            Email
            <input 
            className="form-control"
            id="emailInput"
            placeholder="Email"
            type="email" 
            name="email" 
            value={email} 
            onChange={e => this.handleChange(e)} 
            />
          </label>
        </div>
        <div className="form-group">
          <label form="messageLabel">
            Message 
            <textarea className="form-control" rows="3"
            name="message" 
            value={message} 
            onChange={e => this.handleChange(e)} />
          </label>
        </div>
          <Button bsStyle="primary" type="submit">Send</Button>



      </form>
    );
  }
}

export default ContactForm;
