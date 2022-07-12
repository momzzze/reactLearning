
const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(`${baseUrl}`);
    const result = await response.json();

    return result.users;

}

export const getOneById = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result.user;
}

export const create = async (userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).catch(err => {
        console.log(err);
    });
    if (response.ok) {
        const result = await response.json();
        console.log(result.user);
        return result.user;
    } else {
        throw { message: 'Unable to create user' }
    }

}

export const edit = async (userData, id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const result = await response.json();
    console.log(result.user);
    return result.user;
}

export const Delete = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
}