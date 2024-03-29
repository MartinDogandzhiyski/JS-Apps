const host = 'http://localhost:303/';

async function requester(method, url, data) {
    const user = sessionStorage.getItem('user');
    const options = {
        method: method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const res = await fetch(`${host}${url}`, options);
        if (!res.ok) {
            if (res.status === 403) {
                sessionStorage.removeItem('user');
                throw new Error('Acces denied');
            }
            const err = await res.json();
            throw new Error
        }
    } catch (error) {
        alert(error.message);
        throw error;

    }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const delete_ = requester.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    delete_
}