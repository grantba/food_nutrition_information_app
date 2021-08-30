function favoritesReducer(state = {favorites: [], requesting: false, message: ""}, action) {
    switch (action.type) {
        case "START_FETCHING_FAVORITES":
            return {
                ...state,
                message: "",
                requesting: true
            }
        case "GET_FAVORITES":
            debugger
            return {
                favorites: action.favorites,
                message: "",
                requesting: false
            }

        case "ADD_FAVORITE":
            debugger
            return {
                ...state,
                favorites: action.favorite,
                message: "",
                requesting: false
            }
  
        default:
            return {
                favorites: []
            }
    }
}

export default favoritesReducer;