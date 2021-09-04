import React, { Component } from 'react'
import '../css/UsersForms.css'

class Signup extends Component {

    state = {
        username: "",
        email: "",
        password: "", 
        reason_for_use: ""
    }

    componentWillUnmount() {
        this.setState({username: "", email: "", password: "", reason_for_use: ""})
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.username && this.state.email && this.state.password && this.state.username.length >= 6) {
            this.props.userSignup(this.state)
        } else (
            alert("You must provide both a username and password to sign up for an account and your username must be at least 6 characters in length.\nPlease try again.")
        )
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="user-form" style={{marginTop: "8%"}}>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label><br></br>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br><br></br>

                    <label htmlFor="email">Email</label><br></br>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/><br></br><br></br>
                    
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br><br></br>

                    <label htmlFor="reason">Goal or Reason for Using App</label><br></br>
                    <textarea id="reason" name="reason_for_use" onChange={this.handleChange} placeholder="Examples...lose weight, count carbs, eat healthier, etc."></textarea><br></br><br></br>
                    
                    <input className="submit" type="submit" value="Signup"/>
                </form>
            </div>
        )
    }
}

export default Signup
