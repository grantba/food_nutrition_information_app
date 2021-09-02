import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom'

export default class UsersContainer extends Component {

    state = {

    }

    render() {
        return (
           <div>
                <Switch>        
                    <Route path="/login"><Login/></Route>
                    <Route path="/signup"><Signup/></Route>
                </Switch>
            </div>
        )
    }
}
