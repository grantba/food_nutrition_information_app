function favoritesReducer(state = {favorites: [], requesting: false, message: ""}, action) {
    let index;
    switch (action.type) {
        case "START_FETCHING_FAVORITES":
            return {
                favorites: [...state.favorites],
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
                favorites: [...state.favorites, action.favorite],
                message: "This food has been added to your favorites.",
                requesting: false
            }

        case "DELETE_FAVORITE_FOOD":
            index = state.favorites.findIndex(fav => fav.id === action.id)
            return {
                favorites: [...state.favorites.slice(0, index), ...state.favorites.slice(index + 1)],
                message: "Your favorite has been deleted.",
                requesting: false
            }

        case "EDIT_FAVORITE_FOOD":
            index = state.favorites.findIndex(fav => fav.id === action.favorite.id)
            return {
                favorites: [...state.favorites.slice(0, index), action.favorite, ...state.favorites.slice(index + 1)],
                message: "Your favorite has been upated.",
                requesting: false
            }
  
        default:
            return state    
    }   
}

export default favoritesReducer;