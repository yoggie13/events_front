// const url_main = process.env.REACT_APP_API_ENDPOINT;
const url_main = "http://127.0.0.1:5000/";

const headers_main = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    'Access-Control-Allow-Origin': '*'
}

export default class api {

    static get = async (url) => {
        return await fetch(
            url_main + url,
            {
                method: "GET",
                mode: "cors",
                headers: headers_main,
                // credentials: 'include',
                // xhrFields: {
                //     "withCredentials": 'true',
                // }
            })
            .catch(error => {
                console.log(error);
            })
    }
    static post = async (url, data) => {
        return await fetch(
            url_main + url,
            {
                method: "POST",
                mode: "cors",
                headers: headers_main,
                // credentials: 'include',
                // xhrFields: {
                //     "withCredentials": true,
                // },
                body: JSON.stringify(data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    static put = async (url, data) => {
        return await fetch(
            url_main + url,
            {
                method: "PUT",
                mode: "cors",
                headers: headers_main,
                // credentials: 'include',
                // xhrFields: {
                //     "withCredentials": true,
                // },
                body: JSON.stringify(data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    static delete = async (url) => {
        return await fetch(
            url_main + url,
            {
                method: "DELETE",
                mode: "cors",
                headers: headers_main,
                // credentials: 'include',
                // xhrFields: {
                //     "withCredentials": true,
                // },
            })
            .catch(error => {
                console.log(error);
            })
    }
}
