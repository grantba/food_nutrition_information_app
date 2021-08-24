import React, {Component} from 'react'
import '../css/Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#signup">Signup</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
                        <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li id="right"><a href="#calculator" onClick={this.props.showCalculator}>Calculator</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
