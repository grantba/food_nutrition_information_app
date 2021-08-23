import React, { Component } from 'react';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        Testing
        <Footer/>
      </div>
    )
  }
}

export default App

