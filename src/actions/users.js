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
                alert(user.message)
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
                alert(user.message)
            } 
            if (user.user.date) {
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
                alert(user.message)
            } else {
                const userData = user.user
                localStorage.clear('user')
                localStorage.setItem('user', JSON.stringify(user))  
                alert("Your account information has been updated.")          
                dispatch({type:'EDIT_USER', userData}) 
            }
        })
        .catch(() => {
            alert("There was an issue updating your account information.\nPlease try again.")
        })
    }
}

export function logout() {
    localStorage.clear('user')
    return (dispatch) => {
        dispatch({type: 'LOGOUT'})
    }
}