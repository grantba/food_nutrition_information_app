import React, {Component} from 'react'
import '../css/Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Foods</a></li>
                    <li><a href="#">My Meals</a></li>
                    <li id="dropdown">
                        <a href="#" id="dropbtn">My Account</a>
                        <div id="dropdown-content">
                        <a href="#">Edit Account Information</a>
                        <a href="#">Delete Account</a>
                        <a href="#">Logout</a>
                        </div>
                    </li>
                    <li id="right"><a href="#" onClick={this.props.showCalculator}>Calculator</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar

