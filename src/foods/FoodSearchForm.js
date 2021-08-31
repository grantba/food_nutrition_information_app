import React, {Component} from 'react'
import Food from './Food'
import '../css/SearchForm.css'
import {connect} from 'react-redux'
import {searchFoods} from '../actions/foods'
import {addFavoriteFood, deleteFood} from '../actions/favorites'

class FoodSearchForm extends Component {

    state = {
        food_name: ""
    }

    componentWillUnmount() {
        this.props.deleteFood()
    }

    searchFoods = (foodItem, event) => {
        event.preventDefault()
        this.props.searchFoods(foodItem)
        event.target.querySelector("input").value = ""
    }

    onChange = event => {
        this.setState({
            ...this.state,
            food_name: event.target.value
        })
    }

    addToFavorites = (foodItem) => {
        this.props.addFavoriteFood(foodItem)
    }

    render() {
        return (
            <div className="searchform cf">
                <form onSubmit={(event) => this.searchFoods(this.state.food_name, event)} className="searchForm"> 
                    <input onChange={this.onChange} type="text" name="foodItem" placeholder="Name of Food"></input>  
                    <button>Search</button>
                </form>
                {this.props.food.length !== 0 ? <Food food={this.props.food} addToFavorites={this.addToFavorites}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        food: state.searchResult.searchResult,
        message: state.message,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, {searchFoods, deleteFood, addFavoriteFood})(FoodSearchForm)