import React, { Component } from 'react'
import FoodSearchForm from './FoodSearchForm'

class Foods extends Component {

    state = {

    }

    searchFoods = (foodItem, event) => {
        debugger
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <FoodSearchForm searchFoods={this.searchFoods}/>
            </div>
        )
    }
}

export default Foods
