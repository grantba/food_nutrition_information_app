import React, { Component } from 'react'
import '../css/UsersForms.css'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    componentWillUnmount() {
        this.setState({username: "", password: ""})
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.username && this.state.password) {
            this.props.userLogin(this.state)
        } else (
            alert("You must provide both your username and password to log into your account.\nPlease try again")
        )
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="user-form" style={{marginTop: "15%"}}>
                <h1>User Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label><br></br>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br><br></br>
                    
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br><br></br>
                    
                    <input className="submit" type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login