import React, { Component } from 'react'
import '../css/UsersForms.css'

class Signup extends Component {

    state = {
        username: "",
        password: "", 
        reason_for_use: ""
    }

    handleSubmit = event => {
        debugger
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="user-form" style={{marginTop: "10%"}}>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label><br></br>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br><br></br>
                    
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br><br></br>

                    <label htmlFor="reason">Goal or Reason for Using App</label><br></br>
                    <textarea id="reason" name="reason" onChange={this.handleChange} value={this.state.reason_for_use} placeholder="Examples...lose weight, count carbs, eat healthier, etc."/><br></br><br></br>
                    
                    <input className="submit" type="submit" value="Signup"/>
                </form>
            </div>
        )
    }
}

export default Signup
