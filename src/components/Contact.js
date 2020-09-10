import React from 'react'

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

export default Contact