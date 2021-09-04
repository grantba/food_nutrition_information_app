import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogin, userSignup} from '../actions/users'
import UsersHomepage from './UsersHomepage'

class UsersContainer extends Component {

    render() {
        return (
           <div>
               {this.props.user.loggedIn === false ?
                <Switch>    
                    <Route path="/login"><Login userLogin={this.props.userLogin}/></Route>
                    <Route path="/signup"><Signup userSignup={this.props.userSignup}/></Route>
                </Switch>
                : <UsersHomepage user={this.props.user.user.attributes.username}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    } 
}

export default connect(mapStateToProps, {userSignup, userLogin})(UsersContainer)