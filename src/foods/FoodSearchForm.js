import React, {Component} from 'react'
import Food from './Food'
import '../css/SearchForm.css'

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

    searchFoods = (foodItem, event) => {
        event.preventDefault()
        debugger
        // this.setState({})
    }

    onChange = event => {
        this.setState({
            ...this.state,
            food_name: event.target.value
        })
    }

    render() {
        const testFood = {
            food_name: "hamburger",
            calories: 1.0,
            cholesterol: 2.0,
            dietary_fiber: 3.0,
            potassium: 4.0,
            protein: 5.0,
            saturated_fat: 6.0,
            sodium: 7.0,
            sugars: 8.0,
            total_carbohydrate: 9.0,
            total_fat: 10.0,
            thumbnail: "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1559057296/Burger-National-Hamburger-Day-FT-Blog0619.jpg?itok=p_c0wvCU",
            serving_qty: 11.0,
            serving_unit: 12.0,
            serving_weight_grams: 13.0
        }
        return (
            <div className="searchform cf">
                <form onSubmit={(event) => this.searchFoods(this.state.food_name, event)} className="searchForm"> 
                <input onChange={this.onChange} type="text" name="foodItem" placeholder="Name of Food"></input>  
                    <button>Search</button>
                </form>
                <Food food={testFood}/>
            </div>
        )
    }
}

export default FoodSearchForm