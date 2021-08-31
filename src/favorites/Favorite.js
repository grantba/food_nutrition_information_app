import React from 'react'
import '../css/Favorite.css'

export default function Favorite(props) {

    return (
        <div className="favorite" id={props.favorite.id}>
            <img src={props.favorite.food.thumbnail} alt={props.favorite.food.food_name}></img>
            <h2>{props.favorite.category_type}</h2>
            <h2 className="title" id={props.favorite.food_id}>{props.favorite.food.food_name}</h2>
            <p>Total Calories: {props.favorite.food.calories}</p>
            <p>Total Fat: {props.favorite.food.total_fat} g</p>
            <p>Saturated Fat: {props.favorite.food.saturated_fat} g</p>
            <p>Cholesterol: {props.favorite.food.cholesterol} mg</p>
            <p>Sodium: {props.favorite.food.sodium} mg</p>
            <p>Total Carbohydrate: {props.favorite.food.total_carbohydrate} g</p>
            <p>Dietary Fiber: {props.favorite.food.dietary_fiber} g</p>
            <p>Sugars: {props.favorite.food.sugars} g</p>
            <p>Protein: {props.favorite.food.protein} g</p>
            <p>Potassium: {props.favorite.food.potassium} mg</p>
            <p>Serving Size: {props.favorite.food.serving_qty} {props.favorite.food.serving_unit}</p>
            <p>Serving Weight: {props.favorite.food.serving_weight_grams} g</p>
            <button id="top" onClick={() => props.editFavorite(props.favorite)} >Edit</button>
            <button id="bottom" onClick={() => props.deleteFavorite(props.favorite)} >Delete</button>
        </div>
    ) 
}
