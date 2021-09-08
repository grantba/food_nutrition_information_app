import React, { Component } from 'react'
import '../css/UsersForms.css'
import { withRouter } from 'react-router-dom';

class UsersEditForm extends Component {

    state = {
        id: parseInt(this.props.user.user.id),
        username: this.props.user.user.attributes.username,
        email: this.props.user.user.attributes.email,
        password: this.props.user.user.attributes.password, 
        reason_for_use: this.props.user.user.attributes.reason_for_use
    }

    componentWillUnmount() {
        this.setState({username: "", email: "", password: "", reason_for_use: ""})
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.id && this.state.username && this.state.email && this.state.password && this.state.username.length >= 6) {
            this.props.editUser(this.state)
            this.props.history.push('/home')
        } else (
            alert("All fields must be filled out completely to edit your account and your username must be at least 6 characters in length.\nPlease try again.")
        )
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const getUserData = this.props.user.user.reason_for_use === "" ? 
        <textarea id="reason" name="reason_for_use" onChange={this.handleChange} placeholder="Examples...lose weight, count carbs, eat healthier, etc."></textarea>
        : <textarea id="reason" name="reason_for_use" onChange={this.handleChange} defaultValue={this.props.user.user.attributes.reason_for_use}></textarea>
        return (
            <div className="user-form" style={{marginTop: "5%"}}>
                <h1>Edit Your Account Information</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label><br></br>
                    <input type="text" name="username" onChange={this.handleChange} defaultValue={this.props.user.user.attributes.username}/><br></br><br></br>

                    <label htmlFor="email">Email</label><br></br>
                    <input type="email" name="email" onChange={this.handleChange} defaultValue={this.props.user.user.attributes.email}/><br></br><br></br>
                    
                    <label htmlFor="password">Password</label><br></br>
                    <input id="reason" type="password" name="password" onChange={this.handleChange} placeholder="Enter current password or a new password"/><br></br><br></br>

                    {/* <textarea id="reason" type="password" name="password" onChange={this.handleChange} placeholder="Enter your current password or a new password if changing"></textarea><br></br><br></br> */}

                    <label htmlFor="reason">Goal or Reason for Using App</label><br></br>
                    {getUserData}
                    
                    <button id="cancel" className="submit" onClick={() => this.props.history.push('/home')}>Cancel</button>
                    <input className="submit" type="submit" value="Edit"/>
                </form>
                {/* {this.props.message !== "" ? <h2 className="loading">{this.props.message}</h2> : null} */}
            </div>
        )
    }
}

export default withRouter(UsersEditForm)
