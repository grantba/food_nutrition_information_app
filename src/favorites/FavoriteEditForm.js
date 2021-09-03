import React from 'react'
import '../css/FavoriteEditForm.css'

export default function FavoriteEditForm(props) {
    return (
        <div className="edit">
            <h1 className="title">Edit Your Favorite Food Information for {props.favorite.food.food_name}</h1>
            <form onSubmit={event => props.handleEdit(event)} id={props.favorite.id}>

                <img src={props.favorite.food.thumbnail} alt={props.favorite.food.food_name}></img>
                <label htmlFor="thumbnail">Thumbnail: </label>
                <input type="text" name="thumbnail" defaultValue={props.favorite.food.thumbnail}></input><br></br><br></br>

                <label htmlFor="food_name">Name of Food: </label>
                <input type="text" name="food_name" defaultValue={props.favorite.food.food_name}></input><br></br><br></br>

                <label htmlFor="category_type">Category Type: </label>
                {props.favorite.food_category_type === "" ? <input type="text" name="category_type" placeholder="Food Category Type..."></input> : <input type="text" name="category_type" defaultValue={props.favorite.food_category_type}></input>}<br></br><br></br>

                <label htmlFor="calories">Total Calories </label>
                <input type="number" step="any" name="calories" defaultValue={props.favorite.food.calories}></input><br></br><br></br>

                <label htmlFor="total_fat">Total Fat (g): </label>
                <input type="number" step="any" name="total_fat" defaultValue={props.favorite.food.total_fat}></input><br></br><br></br>

                <label htmlFor="saturated_fat">Saturated Fat (g): </label>
                <input type="number" step="any" name="saturated_fat" defaultValue={props.favorite.food.saturated_fat}></input><br></br><br></br>

                <label htmlFor="cholesterol">Cholesterol (mg): </label>
                <input type="number" step="any" name="cholesterol" defaultValue={props.favorite.food.cholesterol}></input><br></br><br></br>

                <label htmlFor="sodium">Sodium (mg): </label>
                <input type="number" step="any" name="sodium" defaultValue={props.favorite.food.sodium}></input><br></br><br></br>

                <label htmlFor="carbohydrate">Total Carbohydrate (g): </label>
                <input type="number" step="any" name="carbohydrate" defaultValue={props.favorite.food.total_carbohydrate}></input><br></br><br></br>

                <label htmlFor="fiber">Dietary Fiber (g): </label>
                <input type="number" step="any" name="fiber" defaultValue={props.favorite.food.dietary_fiber}></input><br></br><br></br>

                <label htmlFor="sugars">Sugars (g): </label>
                <input type="number" step="any" name="sugars" defaultValue={props.favorite.food.sugars}></input><br></br><br></br>

                <label htmlFor="protein">Protein (g): </label>
                <input type="number" step="any" name="protein" defaultValue={props.favorite.food.protein}></input><br></br><br></br>

                <label htmlFor="potassium">Potassium (mg): </label>
                <input type="number" step="any" name="potassium" defaultValue={props.favorite.food.potassium}></input><br></br><br></br>

                <label htmlFor="serving_qty">Serving Size: </label>
                <input type="number" step="any" name="serving_qty" defaultValue={props.favorite.food.serving_qty}></input><br></br><br></br>

                <label htmlFor="serving_unit">Serving Unit: </label>
                <input type="text" name="serving_unit" defaultValue={props.favorite.food.serving_unit}></input><br></br><br></br>

                <label htmlFor="serving_weight">Serving Weight (g): </label>
                <input type="number" step="any" name="serving_weight" defaultValue={props.favorite.food.serving_weight_grams}></input><br></br><br></br>

                <input type="hidden" name="user_id" value={props.favorite.user_id}/>
                <input type="hidden" name="food_id" value={props.favorite.food_id}/> 

                <button id="cancel" className="submit" onClick={event => props.handleEdit(event)}>Cancel</button>
                <input className="submit" type="submit" value="Edit"></input>
            </form>
        </div>
    )
}