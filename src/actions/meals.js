import {authHeader} from './auth'

export function getMeals() {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_MEALS'});
        const requestOptions = {
            headers: authHeader(),
        }
        fetch('http://localhost:3000/meals', requestOptions)
            .then(resp => resp.json())
            .then(meals => { 
                if (meals.errors) {
                    alert(`${meals.errors}\nPlease try again.`)
                } else {
                dispatch({type: 'GET_MEALS', meals})
                }
            }) 
        .catch(error => alert(`We were unable to get your meals due to ${error}.\nPlease try again.`))   
    }
}

export function getMeal(id) {
    return (dispatch) => {
        const requestOptions = {
            headers: authHeader(),
        }
        fetch(`http://localhost:3000/meals/${id}`, requestOptions)
            .then(resp => resp.json())
            .then(meal => {
                if (meal.errors) {
                    alert(`${meal.errors}\nPlease try again.`)
                } else {
                dispatch({type: 'GET_MEAL', meal})
                }
            }) 
        .catch(error => alert(`We were unable to get your meal due to ${error}.\nPlease try again.`))   
    }
}