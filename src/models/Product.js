import { RequestUtility } from "../utils";
const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getListTable = async () => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/merchant/products",
        params: {
            offset: 0,
            limit: 200
        },
        data: null,
        type: "json"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        const formattedData = response.data.data.products.map(item => {
            return {
                id: item.id,
                image: SERVER_URL + "/" + item.photo,
                name: item.name,
                price: item.price,
                stock: item.stock,
                weight: item.weight,
                category: item.category.name,
                description: item.description
            };
        });

        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: formattedData,
            message: "Berhasil menampilkan!",
        });
    } else {
        result = RequestUtility.standardResponse({
            success: false,
            code: response.status,
            data: null,
            message: response.data.message,
        });
    }
    return result;
};

const Product = {
    getListTable
};

export default Product;