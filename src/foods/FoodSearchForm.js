import React, {Component} from 'react'
import Food from './Food'
import '../css/SearchForm.css'
import {connect} from 'react-redux'
import {searchFoods, deleteFood} from '../actions/foods'

class FoodSearchForm extends Component {

    state = {
        food_name: "",
        calories: 0.0,
        cholesterol: 0.0,
        dietary_fiber: 0.0,
        potassium: 0.0,
        protein: 0.0,
        saturated_fat: 0.0,
        sodium: 0.0,
        sugars: 0.0,
        total_carbohydrate: 0.0,
        total_fat: 0.0,
        thumbnail: "",
        serving_qty: 0.0,
        serving_unit: 0.0,
        serving_weight_grams: 0.0
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

    render() {
        return (
            <div className="searchform cf">
                <form onSubmit={(event) => this.searchFoods(this.state.food_name, event)} className="searchForm"> 
                <input onChange={this.onChange} type="text" name="foodItem" placeholder="Name of Food"></input>  
                    <button>Search</button>
                </form>
                {this.props.food.length !== 0 ? <Food food={this.props.food}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        food: state.searchResult.searchResult,
        message: state.message,
        requesting: state.requesting  
    }
}

export default connect(mapStateToProps, {searchFoods, deleteFood})(FoodSearchForm)