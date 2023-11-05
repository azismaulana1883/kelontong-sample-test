import axios from 'axios'

const BASE_URL_API = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product";

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

export {
getProductList
}