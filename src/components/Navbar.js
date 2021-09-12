import React, {Component} from 'react'
import '../css/Navbar.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/users'

class Navbar extends Component {

    render() {
        const getUser = this.props.user.loggedIn === false ? null : `users/${this.props.user.user.id}/edit`
        return (
            <div className="navbar">
                {this.props.user.loggedIn === false ?
                <ul>
                    <NavLink to="/"><li><a href="#">Home</a></li></NavLink>
                    <NavLink to="/signup"><li><a href="#">Signup</a></li></NavLink>
                    <NavLink to="/login"><li><a href="#">Login</a></li></NavLink>
                    <li id="right"><a href="#" onClick={this.props.showCalculator}>Calculator</a></li>
                    <NavLink to="/search_foods"><li id="right"><a href="#">Search Foods</a></li></NavLink>
                </ul> :
                <ul>
                    <NavLink to="/home"><li><a href="#">Home</a></li></NavLink>
                    <NavLink to="/favorites"><li><a href="#">My Favorites</a></li></NavLink>
                    <NavLink to="/meals"><li><a href="#">My Meals</a></li></NavLink>
                    <li id="dropdown">
                        <a href="my_account_information" id="dropbtn">My Account</a>
                        <div id="dropdown-content">
                        <NavLink to={getUser}><a href="#">Edit Account Information</a></NavLink> 
                        <a href="#" onClick={this.props.logout}>Logout</a>
                        </div>
                    </li>
                    <li id="right"><a href="#" onClick={this.props.showCalculator}>Calculator</a></li>
                    <NavLink to="/search_foods"><li id="right"><a href="#">Search Foods</a></li></NavLink>
                </ul>}       
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    } 
}

export default connect(mapStateToProps, {logout})(Navbar)