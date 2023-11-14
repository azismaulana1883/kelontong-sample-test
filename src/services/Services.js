import axios from 'axios'

const BASE_URL_API = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product";

const BASE_URL_API_LOGIN = "https://pear-successful-mackerel.cyclic.app/api/v1/auth/login";

console.log(BASE_URL_API)

const getProductList = async () => {
    try {
        const url = `${BASE_URL_API}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

const login = async (username,password) => {
    try {
        const url_login = `${BASE_URL_API_LOGIN}`;
        const response = await axios.post(url_login, { username, password });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export {
getProductList,
login
}