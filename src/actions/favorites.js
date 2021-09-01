export function getFavorites() {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_FAVORITES'});
        fetch('http://localhost:3000/favorites')
            .then(resp => resp.json())
            .then(favorites => dispatch({type: 'GET_FAVORITES', favorites}))    
    }
}

export function deleteFavoriteFood(id) {
    return(dispatch) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(`http://localhost:3000/favorites/${id}`, requestOptions)
        .then(() => dispatch({type: 'DELETE_FAVORITE_FOOD', id}))
    }
}

export function editFavoriteFood(foodItem) {
    return(dispatch) => {
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({favorite: foodItem})
        }
        fetch(`http://localhost:3000/favorites/${foodItem.id}`, requestOptions)
            .then(resp => resp.json())
            .then(favorite => dispatch({type: 'EDIT_FAVORITE_FOOD', favorite}))   
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
            user_id: 1
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({favorite: params})
        }
        fetch('http://localhost:3000/favorites', requestOptions)
            .then(resp => resp.json())
            .then(favorite => dispatch({type: 'ADD_FAVORITE_FOOD', favorite}))    
    }
}
