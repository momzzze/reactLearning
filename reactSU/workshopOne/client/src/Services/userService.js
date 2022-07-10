
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
    });
    const result = await response.json();

    return result.user;
}

export const edit = async () => {

}

export const Delete = async () => {

}