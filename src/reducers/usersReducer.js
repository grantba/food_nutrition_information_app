let user = JSON.parse(localStorage.getItem('user'))
const initialState = !!user ? {loggedIn: true, user: user.user.data, requesting: false, message: ""} : {loggedIn: false, user: [], requesting: false, message: ""}

function usersReducer(state = initialState, action) {
    switch (action.type) {
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

        case "EDIT_USER":
            return {
                loggedIn: true,
                user: action.userData.data,
                message: "Your account information has been updated.",
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
  
        default:
            return state    
    }   
}

export default usersReducer;