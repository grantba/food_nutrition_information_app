export function getFavorites(userId) {
    debugger
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_FAVORITES'});
        const requestOptions = {
            body: JSON.stringify({userId: `${userId}`})
        }
        fetch(`https://localhost:3000/favorites`, requestOptions)
            .then(resp => resp.json())
            .then(favorites => {debugger})
                // dispatch({type: 'GET_FAVORITES', favorites}))    
    }
}

export function addFavorite(foodItem) {
    debugger
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({favorite: `${foodItem}`})
        }
        fetch(`https://localhost:3000/favorites`, requestOptions)
            .then(resp => resp.json())
            .then(favorite => {debugger})
                // dispatch({type: 'ADD_FAVORITE', favorite}))    
    }
}