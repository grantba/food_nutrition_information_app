let user = JSON.parse(localStorage.getItem('user'))
const initialState = !!user ? {loggedIn: true, user: user.user.data, requesting: false, message: ""} : {loggedIn: false, user: [], requesting: false, message: ""}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "START_LOGIN":
            return {
                ...initialState,
                message: "Logging in...",
                requesting: true
            }

        case "START_SIGNUP":
            return {
                ...initialState,
                message: "Signing up...",
                requesting: true
            }

        case "LOGIN":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "",
                requesting: false
            }

        case "SIGNUP":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "",
                requesting: false
            }

        case "LOGOUT":
            return {
                loggedIn: false,
                user: [],
                message: "Thanks for visiting today.",
                requesting: false
            }

        // case "DELETE_FAVORITE_FOOD":
        //     return {
        //         user: [...state.favorites.slice(0, index), ...state.favorites.slice(index + 1)],
        //         message: "Your favorite has been deleted.",
        //         requesting: false
        //     }

        // case "EDIT_FAVORITE_FOOD":
        //     return {
        //         user: [...state.favorites.slice(0, index), action.favorite, ...state.favorites.slice(index + 1)],
        //         message: "Your favorite has been upated.",
        //         requesting: false
        //     }
  
        default:
            return state    
    }   
}

export default usersReducer;