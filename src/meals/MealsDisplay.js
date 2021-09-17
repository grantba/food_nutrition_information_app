import React, {Component} from 'react'
import '../css/Meal.css'
import {withRouter} from 'react-router-dom'

class MealsDisplay extends Component {

    handleClick = (id) => {
        this.props.history.push(`/meals/${id}`)
    }

    render() {
        const meal = this.props.meal
        if (!meal) return <h2 className="error">There was an error loading your request.</h2>
        return (
            <div className="meal" id={meal.id}>
                <h1 className="title">{meal.meal_category_type}</h1>
                <h2>{meal.description}</h2>
                <button onClick={() => this.handleClick(meal.id)}>View Meal</button>
            </div>
        ) 
    }
}

export default withRouter(MealsDisplay)