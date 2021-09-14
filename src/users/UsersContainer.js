import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogin, userSignup, editUser, deleteUser} from '../actions/users'
import Homepage from '../components/Homepage'
import UsersHomepage from './UsersHomepage'
import UsersEditForm from './UsersEditForm'

class UsersContainer extends Component {

    render() {
        return (
           <div>
               {this.props.user.loggedIn === false ?
                <Switch>    
                    <Route exact path="/login"><Login userLogin={this.props.userLogin}/></Route>
                    <Route exact path="/signup"><Signup userSignup={this.props.userSignup}/></Route>
                    <Route path="/" component={Homepage}/>
                </Switch>
                : 
                <Switch>
                    <Route exact path="/home"><UsersHomepage user={this.props.user.user.attributes.username}/></Route>
                    <Route exact path="/users/:id/edit"><UsersEditForm user={this.props.user} editUser={this.props.editUser} deleteUser={this.props.deleteUser}/></Route>
                    <Redirect to="/home" />
                </Switch>
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        requesting: state.user.requesting,
        message: state.user.message
    } 
}

export default connect(mapStateToProps, {userSignup, userLogin, editUser, deleteUser})(UsersContainer)