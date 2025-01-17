export const fetchWrapper = {
    get,
    getWithoutToken,
    post,
    postWithoutToken,
    put,
};

function fatchhandler(url, requestOptions) {
    return fetch(url, requestOptions)
        .then((res) => {
            return res.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            return err;
        });
}

function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    return fatchhandler(url, requestOptions)
}

function getWithoutToken(url) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fatchhandler(url, requestOptions)
}

function postWithoutToken(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(body)
    };
    return fatchhandler(url, requestOptions)
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        // credentials: 'include', 
        body: JSON.stringify(body)
    };
    return fatchhandler(url, requestOptions)
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    return fatchhandler(url, requestOptions)
}

function authHeader() {
    var accessToken = localStorage.getItem('accessToken');
    return { Authorization: `Bearer ${accessToken}` };
}