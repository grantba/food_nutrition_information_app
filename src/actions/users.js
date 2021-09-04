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
            } else {
                const userData = user.user
                localStorage.setItem('user', JSON.stringify(user))            
                dispatch({type:'SIGNUP', userData}) 
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