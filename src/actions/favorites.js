export function getFavorites() {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_FAVORITES'});
        fetch('http://localhost:3000/favorites')
            .then(resp => resp.json())
            .then(favorites => dispatch({type: 'GET_FAVORITES', favorites}))    
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