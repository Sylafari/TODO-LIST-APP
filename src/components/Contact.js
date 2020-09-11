import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          eMail: "",
          cComments: "",
        };
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = (event) => {
          event.preventDefault();
          console.log("Handle Submit");
        }
      }
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

      render() {
        return (
          <form onSubmit ={this.handleSubmit}>
          <p className = "center">Enter your first name:</p>
          <input
            type='text'
            name='firstName'
            onChange={this.handleChange}
          />
          <p className = "center">Enter your last name:</p>
          <input
            type='text'
            name='lastName'
            onChange={this.handleChange}
          />
          <p className = "center">Enter your email:</p>
          <input
            type='text'
            name='eMail'
            onChange={this.handleChange}
          />
          <p className = "center">Enter your Comments:</p>
          <input
            type='text'
            name='cComments'
            onChange={this.handleChange}
          />
          <input type = 'submit' />
          </form>
        );
      }
    }

export default Contact
