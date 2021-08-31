export function getFavorites() {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_FAVORITES'});
        fetch('http://localhost:3000/favorites')
            .then(resp => resp.json())
            .then(favorites => dispatch({type: 'GET_FAVORITES', favorites}))    
    }
}

export function deleteFood() {
    return(dispatch) => {
        dispatch({type: 'DELETE_FOOD'});
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
            category_type: "Yummy",
            user_id: 1
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({food: params})
        }
        fetch('http://localhost:3000/foods', requestOptions)
            .then(resp => resp.json())
            .then(favorite => dispatch({type: 'ADD_FAVORITE_FOOD', favorite}))    
    }
}
