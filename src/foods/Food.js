import React from 'react'
import '../css/Food.css'

export default function Food(props) {
    return (
        <div className="card">
            <img src={props.food.thumbnail} alt={props.food.food_name}></img>
            <h2 className="title">{props.food.food_name}</h2>
            <p>Total Calories: {props.food.calories}</p>
            <p>Total Fat: {props.food.total_fat} g</p>
            <p>Saturated Fat: {props.food.saturated_fat} g</p>
            <p>Cholesterol: {props.food.cholesterol} mg</p>
            <p>Sodium: {props.food.sodium} mg</p>
            <p>Total Carbohydrate: {props.food.total_carbohydrate} g</p>
            <p>Dietary Fiber: {props.food.dietary_fiber} g</p>
            <p>Sugars: {props.food.sugars} g</p>
            <p>Protein: {props.food.protein} g</p>
            <p>Potassium: {props.food.potassium} mg</p>
            <p>Serving Size: {props.food.serving_qty}</p>
            <p>Serving Unit: {props.food.serving_unit}</p>
            <p>Serving Weight: {props.food.serving_weight_grams} g</p>
            <button>Add to Favorites</button>
        </div>
    )
}
