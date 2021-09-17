import React, {Component} from 'react'
import '../css/Meal.css'
import {connect} from 'react-redux'
import {getMeal} from '../actions/meals'

class MealWithFoodDisplay extends Component {

    componentDidMount() {
        if (this.props.user.loggedIn === true) {
            this.props.getMeal(parseInt(this.props.match.params.id))
        }
    }

    renderMealData = () => {
        return this.props.mealWithFood.map(meal => {
            // meal.id (meal_plan id)
            // meal.meal.id
            return <p id={meal.food.id}>{meal.food.food_name}</p>
        })
    }

    render() {
        if (this.props.mealWithFood.length === 0) return <h2 className="loading">Loading...</h2>
        if (this.props.mealWithFood.length > 0 && !!this.props.mealWithFood[0].meal_id) {
            return (
                <div className="meal">
                    <h1 className="title">{this.props.mealWithFood[0].meal.meal_category_type}</h1>
                    <h2>{this.props.mealWithFood[0].meal.description}</h2>
                    {this.renderMealData()}
                </div>
            ) 
        } else {
            return <h2 className="error">There was an error loading your request.</h2>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        mealWithFood: state.meals.mealWithFood,
        message: state.meals.message,
        requesting: state.meals.requesting,
        user: state.user
    }
}

export default connect(mapStateToProps, {getMeal})(MealWithFoodDisplay)