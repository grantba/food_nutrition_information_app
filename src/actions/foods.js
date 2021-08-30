export function searchFoods(foodItem) {
    return (dispatch) => {
        dispatch({type: 'START_SEARCHING_FOOD'});
        const requestOptions = {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'x-app-id': `${process.env.REACT_APP_APPLICATION_ID}`,
              'x-app-key': `${process.env.REACT_APP_KEY}`,
              'x-remote-user-id': `${process.env.REACT_APP_REMOTE_USER_ID}`
            },
            body: JSON.stringify({query: `${foodItem}`})
        }
        fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, requestOptions)
            .then(resp => resp.json())
            .then(food => dispatch({type: 'SEARCH_FOOD', food}))    
    }
}

export function deleteFood() {
    return(dispatch) => {
        dispatch({type: 'DELETE_FOOD'});
    }
}

