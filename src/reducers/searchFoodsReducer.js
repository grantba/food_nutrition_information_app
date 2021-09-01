function searchFoodsReducer(state = {searchResult: [], requesting: false, message: ""}, action) {
    switch (action.type) {
        case "START_SEARCHING_FOOD":
            return {
                searchResult: [],
                message: "",
                requesting: true
            }
        case "SEARCH_FOOD":
            if (action.food.message) {
                return {
                    searchResult: [],
                    message: action.food.message,
                    requesting: false
                } 
            } else {
                return {
                    searchResult: action.food.foods[0],
                    message: "",
                    requesting: false
                }
            }

        case "DELETE_SEARCH":
            return {
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