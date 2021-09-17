function mealsReducer(state = {meals: [], mealWithFood: [], requesting: false, message: ""}, action) {
    switch (action.type) {
        case "START_FETCHING_MEALS":
            return {
                ...state,
                meals: [...state.meals],
                mealWithFood: [...state.mealWithFood],
                message: "",
                requesting: true
            }

        case "GET_MEALS":
            return {
                ...state,
                meals: action.meals,
                mealWithFood: [...state.mealWithFood],
                message: "",
                requesting: false
            }

        case "GET_MEAL":
            return {
                ...state,
                meals: [...state.meals],
                mealWithFood: action.meal,
                message: "",
                requesting: false
            }
  
        default:
            return state    
    }   
}

export default mealsReducer;