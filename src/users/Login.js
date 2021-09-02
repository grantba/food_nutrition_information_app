import React, { Component } from 'react'
import '../css/UsersForms.css'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = event => {
        debugger
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