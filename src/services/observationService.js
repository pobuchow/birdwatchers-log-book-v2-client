import { userService } from './userService';

export const observationService = {
    getLastObservationsForAuthUser,
    deleteObservationForAuthUser
};

function getLastObservationsForAuthUser(size) {
    const requestOptions = {
        method: 'GET',
        headers: { 
            "Access-Control-Allow-Origin": "*",
            'Authorization': userService.provideBasicAuthToken()
        }
    };
    return fetch(process.env.REACT_APP_API_URL + '/observations/getLast/' + size, requestOptions)
        .then(handleResponse);
}
function deleteObservationForAuthUser(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            "Access-Control-Allow-Origin": "*",
            'Authorization': userService.provideBasicAuthToken()
        }
    };
    return fetch(process.env.REACT_APP_API_URL + '/observations/delete/' + id, requestOptions)
        .then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                userService.logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}