export const request = async (method, url, data) => {


    try {
        let buildRequiest;
        if (method === 'GET') {
            buildRequiest = fetch(url);
        } else {
            buildRequiest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequiest;

        console.log(response);

        const result = await response.json();

        return result;

    } catch (error) {
        console.log(error);
    }

}


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const remove = request.bind({}, 'DELETE');
export const patch = request.bind({}, 'PATCH');