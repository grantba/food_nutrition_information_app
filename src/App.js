import React, { Component } from 'react';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import FoodSearchForm from './foods/FoodSearchForm'

class App extends Component {

  state = {
    displayCalculator: false
  }

  showCalculator = () => {
    this.setState({displayCalculator: !this.state.displayCalculator})
  }

  render() {
    return (
      <div className="App">
        <Navbar showCalculator={this.showCalculator}/>
        <FoodSearchForm/>
        <Footer/>
        {this.state.displayCalculator === true ? <Calculator/> : null}
      </div>
    )
  }
}

export default App

