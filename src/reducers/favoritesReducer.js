function favoritesReducer(state = {favorites: [], requesting: false, message: ""}, action) {
    switch (action.type) {
        case "START_FETCHING_FAVORITES":
            return {
                ...state,
                message: "",
                requesting: true
            }
        case "GET_FAVORITES":
            return {
                favorites: action.favorites,
                message: "",
                requesting: false
            }

        case "ADD_FAVORITE_FOOD":
            return {
                ...state,
                favorites: action.favorite,
                message: "",
                requesting: false
            }

        case "DELETE_FAVORITE_FOOD":
            return {
                searchResult: [],
                message: "",
                requesting: false
            }

        case "EDIT_FAVORITE_FOOD":
            return {
                searchResult: [],
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