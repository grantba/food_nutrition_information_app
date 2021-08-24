import React, { Component } from 'react';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

class App extends Component {

  state = {
    displayCalculator: false
  }

  showCalculator = () => {
    this.state.displayCalculator === true ? this.setState({displayCalculator: false}) : this.setState({displayCalculator: true})
  }

  render() {
    return (
      <div className="App">
        <Navbar showCalculator={this.showCalculator}/>
        Testing
        <Footer/>
        {this.state.displayCalculator === true ? <Calculator/> : null}
      </div>
    )
  }
}

export default App

