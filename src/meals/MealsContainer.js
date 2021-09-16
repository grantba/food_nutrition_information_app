import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

class MealsContainer extends Component {

    componentDidMount() {
        if (this.props.user.loggedIn === true) {
            this.props.getMeals()
        }
    }

    render() {
        if (this.props.requesting) return <h2 className="loading">Loading...</h2>
        if (this.props.requesting === false && this.props.message === "" && this.props.meals.length === 0) return <h2 className="empty-message">You have no meals created at this time.</h2>
        if (this.props.user.loggedIn === true) {
            return (
                <div>
                    <Switch>
                        <Route exact path="/meals/:id" component={MealsDisplay}/>
                        <Route exact path="/meals" ></Route>
                    </Switch>            
                </div>
            )
        } else {
            return (<Redirect to="/home" />)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals.meals,
        message: state.meals.message,
        requesting: state.meals.requesting,
        user: state.user
    }
}

export default connect(mapStateToProps)(MealsContainer)
