import {authHeader, getUserId} from './auth'

export function getFavorites() {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_FAVORITES'});
        const requestOptions = {
            headers: authHeader(),
        }
        fetch('http://localhost:3000/favorites', requestOptions)
            .then(resp => resp.json())
            .then(favorites => { 
                // const favorites = allFavorites.filter(favorite => favorite.user_id === getUserId())
                dispatch({type: 'GET_FAVORITES', favorites})
            })    
    }
}

export function deleteFavoriteFood(id) {
    return(dispatch) => {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        }
        fetch(`http://localhost:3000/favorites/${id}`, requestOptions)
        .then(favorite => {      
            if (favorite.ok === false) {
                alert("There was an issue deleting your favorite. Please try again.")
            } else {
                alert("Your favorite has been deleted.")
                dispatch({type: 'DELETE_FAVORITE_FOOD', id})
            }
        })
    }
}

export function editFavoriteFood(foodItem) {
    return(dispatch) => {
        const params = {
            thumbnail: foodItem.thumbnail.value,
            food_name: foodItem.food_name.value,
            food_category_type: foodItem.category_type.value,
            calories: foodItem.calories.value,
            total_fat: foodItem.total_fat.value,
            saturated_fat: foodItem.saturated_fat.value,
            cholesterol: foodItem.cholesterol.value,
            sodium: foodItem.sodium.value,
            total_carbohydrate: foodItem.carbohydrate.value,
            dietary_fiber: foodItem.fiber.value,
            sugars: foodItem.sugars.value,
            protein: foodItem.protein.value,
            potassium: foodItem.potassium.value,
            serving_qty: foodItem.serving_qty.value,
            serving_unit: foodItem.serving_unit.value,
            serving_weight_grams: foodItem.serving_weight.value,
            food_id: foodItem.food_id.value,
            user_id: getUserId(),
            id: foodItem.id // favorite_id
        }
        const requestOptions = {
            method: 'PATCH',
            headers: authHeader(),
            body: JSON.stringify({favorite: params})
        }
        fetch(`http://localhost:3000/favorites/${foodItem.id}`, requestOptions)
            .then(resp => resp.json())
            .then(favorite => {debugger
                // alert("Your favorite has been upated.")
                // dispatch({type: 'EDIT_FAVORITE_FOOD', favorite})
            })   
    }
}

export function addFavoriteFood(foodItem) {
    return (dispatch) => {
        const params = {
            food_name: foodItem.food_name,
            calories: foodItem.nf_calories,
            cholesterol: foodItem.nf_cholesterol,
            dietary_fiber: foodItem.nf_dietary_fiber,
            potassium: foodItem.nf_potassium,
            protein: foodItem.nf_protein,
            saturated_fat: foodItem.nf_saturated_fat,
            sodium: foodItem.nf_sodium,
            sugars: foodItem.nf_sugars,
            total_carbohydrate: foodItem.nf_total_carbohydrate,
            total_fat: foodItem.nf_total_fat,
            thumbnail: foodItem.photo.thumb,
            serving_qty: foodItem.serving_qty,
            serving_unit: foodItem.serving_unit,
            serving_weight_grams: foodItem.serving_weight_grams,
            food_category_type: "",
            user_id: getUserId()
        }
        const requestOptions = {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify({favorite: params})
        }
        fetch('http://localhost:3000/favorites', requestOptions)
            .then(resp => resp.json())
            .then(favorite => {debugger})
                // dispatch({type: 'ADD_FAVORITE_FOOD', favorite}))    
    }
}