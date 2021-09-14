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
            if (user.errors) {
                alert(`Login errors:\n${user.errors}`)
            } else {
                const userData = user.user
                localStorage.setItem('user', JSON.stringify(user))            
                dispatch({type:'LOGIN', userData})  
            }
        })  
        .catch(error =>  alert(`We were unable to log you in due to ${error}.\nPlease try again.`))
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
            if (user.errors) {
                alert(`Signup errors:\n${user.errors}\nPlease try again.`)
            } else {
                const userData = user.user
                localStorage.setItem('user', JSON.stringify(user))            
                dispatch({type:'SIGNUP', userData}) 
            }
        })
        .catch(error =>  alert(`We were unable to sign you up for an account due to ${error}.\nPlease try again.`))
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
            if (user.errors) {
                alert(`Edit errors:\n${user.errors}\nPlease try again.`)
            } else {
                const userData = user.user
                localStorage.clear('user')
                localStorage.setItem('user', JSON.stringify(user))  
                alert("Your account information has been upated.")
                dispatch({type:'EDIT_USER', userData}) 
            }
        })
        .catch(error =>  alert(`We were unable to edit your account due to ${error}.\nPlease try again.`))
    }
}

export function deleteUser(userId) {
    return (dispatch) => {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader(),
        }
        fetch(`http://localhost:3000/users/${userId}`, requestOptions)
        .then(resp => resp.json())
        .then(user => {       
            if (user.ok === false) {
                alert("Failed to delete user account.\nPlease try again.")
            } else if (user.errors) {
                alert(`Delete errors:\n${user.errors}\nPlease try again.`)
            } else {
                localStorage.clear('user')
                alert("Your account has been deleted.")
                dispatch({type:'DELETE_USER', user}) 
            }
        })
        .catch(error =>  alert(`We were unable to delete your account due to ${error}.\nPlease try again.`))
    }
}

export function logout() {
    localStorage.clear('user')
    return (dispatch) => {
        alert("Thanks for visiting today. Hope to see you again soon.")
        dispatch({type: 'LOGOUT'})
    }
}