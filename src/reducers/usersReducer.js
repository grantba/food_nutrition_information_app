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

        case "LOGIN":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "",
                requesting: false
            }

        case "LOGIN_ERROR":
            return {
                loggedIn: false,
                user: [],
                message: action.user.message,
                requesting: false
            }

        case "START_SIGNUP":
            return {
                ...initialState,
                message: "Signing up...",
                requesting: true
            }

        case "SIGNUP":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "",
                requesting: false
            }

        case "SIGNUP_ERROR":
            return {
                loggedIn: false,
                user: [],
                message: action.user.message,
                requesting: false
            }

        case "START_EDITING_ACCOUNT":
            return {
                ...state,
                message: "Editing Your Account...",
                requesting: true
            }

        case "EDIT_USER":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "Your account information has been updated.",
                requesting: false
            }


        case "EDIT_USER_ERROR":
            return {
                ...state,
                message: action.user.message,
                requesting: false
            }

        case "LOGOUT":
            return {
                loggedIn: false,
                user: [],
                message: "Thanks for visiting today.",
                requesting: false
            }

        case "DELETE_USER":
            return {
                loggedIn: false,
                user: [],
                message: "Your account has been deleted.",
                requesting: false            
            }

        case "DELETE_USER_ERROR":
            return {
                ...state,
                message: action.user.message,
                requesting: false
            }

        case "CLEAR_USER_MESSAGE":
            return {
                ...state,
                message: ""
            }
  
        default:
            return state    
    }   
}

export default usersReducer;