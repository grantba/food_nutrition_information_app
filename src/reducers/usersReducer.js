let user = JSON.parse(localStorage.getItem('user'))
const initialState = !!user ? {loggedIn: true, user: user.user.data, requesting: false, message: ""} : {loggedIn: false, user: [], requesting: false, message: ""}

function usersReducer(state = initialState, action) {
    debugger
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

        case "START_EDITING_ACCOUNT":
            return {
                ...initialState,
                message: "Editing Your Account...",
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

        case "EDIT_USER":
            if (action.userData === undefined) {
                return {
                    ...state,
                    message: "There was an issue updating your account information.\nPlease try again."
                }
            } else {
                return {
                    loggedIn: true,
                    user: action.userData.data,
                    message: "Your account information has been updated.",
                    requesting: false
                }
            }
  
        default:
            return state    
    }   
}

export default usersReducer;