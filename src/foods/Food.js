import React from 'react'
import '../css/Food.css'

export default function Food(props) {
    return (
        <div className="card">
            <img src={props.food.thumbnail} alt={props.food.food_name}></img>
            <h2 className="title">{props.food.food_name}</h2>
            <p>{props.food.calories} calories</p>
            <p>{props.food.cholesterol} cholesterol</p>
            <p>{props.food.dietary_fiber} dietary fiber</p>
            <p>{props.food.potassium} potassium</p>
            <p>{props.food.protein} protein</p>
            <p>{props.food.saturated_fat} saturated fat</p>
            <p>{props.food.sodium} sodium</p>
            <p>{props.food.sugars} sugars</p>
            <p>{props.food.total_carbohydrate} total carbohydrate</p>
            <p>{props.food.total_fat} total fat</p>
            <p>{props.food.serving_qty} serving quantity</p>
            <p>{props.food.serving_unit} serving unit</p>
            <p>{props.food.serving_weight_grams} serving weight in grams</p>
            <p><button>Add to Favorites</button></p>
        </div>
    )
}
