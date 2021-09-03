import React, { Component } from 'react';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import FoodSearchForm from './foods/FoodSearchForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import FavoritesContainer from './favorites/FavoritesContainer';
import FavoritesDisplay from './favorites/FavoritesDisplay';
import Login from './users/Login';
import Signup from './users/Signup';

class App extends Component {

  state = {
    displayCalculator: false
  }

  showCalculator = () => {
    this.setState({displayCalculator: !this.state.displayCalculator})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar showCalculator={this.showCalculator}/>
          <Footer/>
          {this.state.displayCalculator === true ? <Calculator/> : null}
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/favorites" component={FavoritesContainer}/>
            <Route path="/favorites/:id" component={FavoritesDisplay}/>
            <Route path="/search_foods" component={FoodSearchForm}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

