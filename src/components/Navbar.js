import React from 'react'
import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#signup">Signup</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
