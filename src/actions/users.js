import {authHeader} from './auth'

export function userLogin(userInfo) {
    return (dispatch) => {
        dispatch({type: 'START_AUTHORIZATION'});
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: userInfo})
        }
        fetch('http://localhost:3000/auth', requestOptions)
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                dispatch({type: 'LOGIN_ERROR', user})
            } else {
                const userData = user.user
                localStorage.setItem('user', JSON.stringify(user))            
                dispatch({type:'LOGIN', userData})  
            }
        })  
    }
}

export function userSignup(userInfo) {
    return (dispatch) => {
        dispatch({type: 'START_CREATING_ACCOUNT'});
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: userInfo})
        }
        fetch('http://localhost:3000/users', requestOptions)
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                dispatch({type: 'SIGNUP_ERROR', user})
            } else {
                const userData = user.user
                localStorage.setItem('user', JSON.stringify(user))            
                dispatch({type:'SIGNUP', userData}) 
            }
        })
    }
}

export function editUser(userInfo) {
    return (dispatch) => {
        const requestOptions = {
            method: 'PATCH',
            headers: authHeader(),
            body: JSON.stringify({user: userInfo})
        }
        fetch(`http://localhost:3000/users/${userInfo.id}`, requestOptions)
        .then(resp => resp.json())
        .then(user => { 
            if (user.message) {
                dispatch({type: 'EDIT_USER_ERROR', user})
            } else {
                const userData = user.user
                localStorage.clear('user')
                localStorage.setItem('user', JSON.stringify(user))  
                dispatch({type:'EDIT_USER', userData}) 
            }
        })
    }
}

export function deleteUser(userId) {
    return (dispatch) => {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader(),
            body: JSON.stringify({user: userId})
        }
        fetch(`http://localhost:3000/users/${userId}`, requestOptions)
        .then(resp => resp.json())
        .then(user => {         
            if (user.message === "Failed to delete user account.") {
                dispatch({type: 'DELETE_USER_ERROR', user})
            } else {
                localStorage.clear('user')
                dispatch({type:'DELETE_USER', user}) 
            }
        })
    }
}

export function logout() {
    localStorage.clear('user')
    return (dispatch) => {
        dispatch({type: 'LOGOUT'})
    }
}

export function clearMessage() {
    return (dispatch) => {
        dispatch({type: 'CLEAR_USER_MESSAGE'})
    }
}