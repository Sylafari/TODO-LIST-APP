import React from 'react'

/*
const Contact = () => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <form>
                First Name: <input type = "text" name="fname"/>
                Last Name: <input type = "text" name="lname"/>
                Email: <input type = "text" name = "email"/>
                Comments: <input type = "text" name = "cname"/>

                <button>Submit</button>
            </form>
        </div>
    )
}

*/

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
      }
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
      render() {
        return (
          <form onSubmit>
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
