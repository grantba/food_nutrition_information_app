import React, { Component } from 'react'
import FoodSearchForm from './FoodSearchForm'
import Food from './Food'

class Foods extends Component {

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

    searchFoods = (foodItem, event) => {
        event.preventDefault()
        debugger
        // this.setState({})
    }

    render() {
        return (
            <div>
                <FoodSearchForm searchFoods={this.searchFoods}/>
                <Food/>
            </div>
        )
    }
}

export default Foods
