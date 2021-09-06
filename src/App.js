import React, { Component } from 'react';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import FoodSearchForm from './foods/FoodSearchForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import FavoritesContainer from './favorites/FavoritesContainer';
import UsersContainer from './users/UsersContainer';
import MealsContainer from './meals/MealsContainer';

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
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" component={UsersContainer}/>
            <Route path="/favorites" component={FavoritesContainer}/>
            <Route path="/search_foods" component={FoodSearchForm}/>
            <Route exact path="/login" component={UsersContainer}/>
            <Route exact path="/signup" component={UsersContainer}/>
            <Route path='/meals' component={MealsContainer}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

