function searchFoodsReducer(state = {searchResult: [], requesting: false, message: ""}, action) {
    switch (action.type) {
        case "START_SEARCHING_FOOD":
            return {
                ...state,
                searchResult: [],
                message: "",
                requesting: true
            }
        case "SEARCH_FOOD":
            if (action.food.message) {
                return {
                    ...state,
                    searchResult: [],
                    message: action.food.message,
                    requesting: false
                } 
            } else {
                return {
                    ...state,
                    searchResult: action.food.foods[0],
                    message: "",
                    requesting: false
                }
            }

        case "DELETE_SEARCH":
            return {
                ...state,
                searchResult: [],
                message: "",
                requesting: false
            }
  
        default:
            return {
                searchResult: [],
                message: "",
                requesting: false
            }    
    }
}

export default searchFoodsReducer;