import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        email : "",
        passw : "",
        first_name: "",
        last_name:""

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">Sign Up</h5>

                    <div className = "input-field">
                        <label htmlFor = "first_name">first name</label>
                        <input type = "text" id = "first_name" onChange = {this.handleChange} className = "blue-text"></input>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "last_name">last name</label>
                        <input type = "text" id = "last_name" onChange = {this.handleChange} className = "blue-text"></input>
                    </div>

                    <div className = "input-field">
                        <label htmlFor = "email">email</label>
                        <input type = "email" id = "email" onChange = {this.handleChange} className = "blue-text"></input>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">password</label>
                        <input type = "password" id = "password" onChange = {this.handleChange} className = "teal-text"></input>
                    </div>

                    <div className = "input-field">
                        <button className = "btn blue lighten-1 z-depth-0">Sign Up</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignUp
