import React, {Component} from 'react'
import '../css/Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <NavLink to="/"><li><a href="#">Home</a></li></NavLink>
                    <NavLink to="/my_favorites"><li><a href="#">My Favorites</a></li></NavLink>
                    <NavLink to="/my_meals"><li><a href="#">My Meals</a></li></NavLink>
                    <li id="dropdown">
                        <a href="#" id="dropbtn">My Account</a>
                        <div id="dropdown-content">
                        <NavLink to="/edit_account_information"><a href="#">Edit Account Information</a></NavLink>
                        <NavLink to="/delete_account"><a href="#">Delete Account</a></NavLink>
                        <NavLink to="/logout"><a href="#">Logout</a></NavLink>
                        </div>
                    </li>
                    <li id="right"><a href="#" onClick={this.props.showCalculator}>Calculator</a></li>

                    <NavLink to="/search_foods"><li id="right"><a href="#">Search Foods</a></li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Navbar

