import React, { Component } from 'react';

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
      .then(() => alert("Thankyou for sending a message"))
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
        <p>
          <label>
            Your Name: 
            <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={e => this.handleChange(e)} />
          </label>
        </p>
        <p>
          <label>
            Your Email: 
            <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={e => this.handleChange(e)} 
            />
          </label>
        </p>
        <p>
          <label>
            Message: 
            <textarea 
            name="message" 
            value={message} 
            onChange={e => this.handleChange(e)} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
