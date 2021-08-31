import React from 'react'
import '../css/Food.css'

export default function Food(props) {
    return (
        <div className="card">
            <img src={props.food.photo.thumb} alt={props.food.food_name}></img>
            <h2 className="title">{props.food.food_name}</h2>
            <p>Total Calories: {props.food.nf_calories}</p>
            <p>Total Fat: {props.food.nf_total_fat} g</p>
            <p>Saturated Fat: {props.food.nf_saturated_fat} g</p>
            <p>Cholesterol: {props.food.nf_cholesterol} mg</p>
            <p>Sodium: {props.food.nf_sodium} mg</p>
            <p>Total Carbohydrate: {props.food.nf_total_carbohydrate} g</p>
            <p>Dietary Fiber: {props.food.nf_dietary_fiber} g</p>
            <p>Sugars: {props.food.nf_sugars} g</p>
            <p>Protein: {props.food.nf_protein} g</p>
            <p>Potassium: {props.food.nf_potassium} mg</p>
            <p>Serving Size: {props.food.serving_qty} {props.food.serving_unit}</p>
            <p>Serving Weight: {props.food.serving_weight_grams} g</p>
            <button onClick={() => props.addFavoriteFood(props.food)}>Add to Favorites</button>
        </div>
    )
}
