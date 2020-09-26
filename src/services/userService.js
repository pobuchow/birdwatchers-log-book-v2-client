export const userService = {
    login,
    logout
};

async function login(username, password) {
    let token = createAuthToken(username, password);
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': createBasicAuthToken(token) }
    };
    localStorage.setItem('user',JSON.stringify({
        'username' : username,
        'token' : token
    }));
    return fetch(process.env.REACT_APP_API_URL + '/auth/basic', requestOptions)
        .then(handleResponse);
}

function createBasicAuthToken(token) {
    return 'Basic ' + token;
}

function createAuthToken(username, password) {
    return window.btoa(username + ":" + password)
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    if(!response.ok) {
        this.logout();
        throw new Error(response.status);
    } 
    return response;
}