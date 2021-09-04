import React from 'react'
import '../css/Favorite.css'
import {connect} from 'react-redux'

function FavoritesDisplay(props) {
    const favorite = props.match ? props.favorites.find(fav => fav.id === parseInt(props.match.params.id)) : props.favorite
    if (!favorite) return <h2 className="error">There was an error loading your request.</h2>
    return (
        <div className="favorite" id={favorite.id}>
            <img src={favorite.food.thumbnail} alt={favorite.food.food_name}></img>
            <h2 className="title" id={favorite.food_id}>{favorite.food.food_name}</h2>
            {favorite.food_category_type === "" ? <h4>Category: Select Edit to Add a Category Type</h4> : <h3>Category: {favorite.food_category_type}</h3>}
            <p>Total Calories: {favorite.food.calories}</p>
            <p>Total Fat: {favorite.food.total_fat} g</p>
            <p>Saturated Fat: {favorite.food.saturated_fat} g</p>
            <p>Cholesterol: {favorite.food.cholesterol} mg</p>
            <p>Sodium: {favorite.food.sodium} mg</p>
            <p>Total Carbohydrate: {favorite.food.total_carbohydrate} g</p>
            <p>Dietary Fiber: {favorite.food.dietary_fiber} g</p>
            <p>Sugars: {favorite.food.sugars} g</p>
            <p>Protein: {favorite.food.protein} g</p>
            <p>Potassium: {favorite.food.potassium} mg</p>
            <p>Serving Size: {favorite.food.serving_qty} {favorite.food.serving_unit}</p>
            <p>Serving Weight: {favorite.food.serving_weight_grams} g</p>
            <button id="top" onClick={() => props.editFavorite(favorite)} >Edit</button>
            <button id="bottom" onClick={() => props.deleteFavoriteFood(favorite.id)} >Delete</button>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites,
        message: state.favorites.message,
        requesting: state.favorites.requesting
    }
}

export default connect(mapStateToProps)(FavoritesDisplay)