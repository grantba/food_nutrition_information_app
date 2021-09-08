export function authHeader() {
    // return authorization header with jwt token
    let user = localStorage.getItem('user')
    let userToken = JSON.parse(localStorage.getItem('user')).jwt
    if (user && userToken) {
        return {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userToken}
    } else {
        return {}
    }
}