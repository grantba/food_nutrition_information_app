import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogin, userSignup, editUser} from '../actions/users'
import UsersHomepage from './UsersHomepage'
import UsersEditForm from './UsersEditForm'

class UsersContainer extends Component {

    render() {
        debugger
        return (
           <div>
               {this.props.user.loggedIn === false ?
                <Switch>    
                    <Route exact path="/login"><Login userLogin={this.props.userLogin}/></Route>
                    <Route exact path="/signup"><Signup userSignup={this.props.userSignup}/></Route>
                </Switch>
                : 
                <Switch>
                    <Route path="/home"><UsersHomepage user={this.props.user.user.attributes.username}/></Route>
                    <Route path="/users/:id/edit"><UsersEditForm message={this.props.message} user={this.props.user} editUser={this.props.editUser}/></Route>
                </Switch>
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        message: state.user.message
    } 
}

export default connect(mapStateToProps, {userSignup, userLogin, editUser})(UsersContainer)