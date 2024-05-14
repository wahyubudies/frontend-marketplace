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

const getListCategory = async () => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/categories",
        params: {},
        data: null,
        type: "json"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        const formattedData = response.data.data.map(item => {
            return {
                id: item.id,
                name: item.name,
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

const addProductItem = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_ENDPOINT + "/merchant/product",
        params: {},
        data,
        type: "form"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: null,
            message: "Sukses menambahkan produk!",
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

const editProductItem = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'put',
        url: SERVER_ENDPOINT + "/merchant/product",
        params: {},
        data,
        type: "form"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: null,
            message: "Sukses mengupdate produk!",
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

const deleteProductItem = async (idProduct) => {
    const response = await RequestUtility.sendRequest({
        method: 'delete',
        url: SERVER_ENDPOINT + "/merchant/product/" + idProduct
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: null,
            message: "Sukses menghapus produk!",
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

const deleteItemGallery = async (idPhoto) => {
    const response = await RequestUtility.sendRequest({
        method: 'delete',
        url: SERVER_ENDPOINT + "/merchant/product-image/" + idPhoto
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: null,
            message: "Sukses menghapus gallery!",
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

const getDetail = async (idProduct) => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/product/" + idProduct,
        params: {},
        data: null,
        type: "json"
    });
    const { images, merchant, ...rest } = response.data.data;
    const formattedData = {
        images: images.map(item => SERVER_URL + "/" + item.image),
        merchant: {
            id: merchant.id ?? "-",
            name: merchant.merchant_name ?? "-",
            phone_number: merchant.phone_number ?? "-",
            address: merchant.address ?? "-"
        },
        ...rest
    };

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: formattedData,
            message: "Sukses menampilkan produk!",
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

const getGalleryItem = async (idProduct) => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/merchant/product-image/" + idProduct,
        params: {},
        data: null,
        type: "json"
    });

    const formattedData = response.data.data.map((item) => {
        return {
            id: item.id,
            image: SERVER_URL + "/" + item.image
        };
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: formattedData,
            message: "Sukses menampilkan gallery!",
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

const getProductList = async (params) => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/merchant/products",
        params,
        useToken: false
    });

    const formattedData = response.data.data.products.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        photo: SERVER_URL + "/" + item.photo
    }));

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: {
                products: formattedData,
                page: response.data.data.page
            },
            message: "Sukses menampilkan products!",
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

const addToCart = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_ENDPOINT + "/user/cart",
        data,
        type: "json"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: response.data.data,
            message: "Sukses menampilkan products!",
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

const getCart = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'get',
        url: SERVER_ENDPOINT + "/user/carts"
    });

    const formattedData = response.data.data.carts.map(item => ({
        id: item.id,
        name: item.product.name,
        qty: item.qty,
        photo: item.product.photo ? SERVER_URL + "/" + item.product.photo : "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp",
        price: item.product.price
    }));

    const totalPrice = formattedData.reduce((total, item) => {
        return total + (item.price * item.qty);
    }, 0);
    
    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: { 
                items: formattedData, 
                totalPrice
            },
            message: "Sukses menampilkan products!",
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

const checkout = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_ENDPOINT + "/user/checkout",
        data,
        type:"json"
    });
    
    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: response.data.data,
            message: "Sukses menampilkan products!",
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

const removeFromCart = async (productId) => {
    const response = await RequestUtility.sendRequest({
        method: 'delete',
        url: SERVER_ENDPOINT + "/user/cart/delete/" + productId,
    });
    
    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: null,
            message: "Sukses menampilkan products!",
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
    getProductList,
    getListTable,
    getListCategory,
    addProductItem,
    deleteProductItem,
    getDetail,
    editProductItem,
    getGalleryItem,
    deleteItemGallery,
    addToCart,
    getCart,
    checkout,
    removeFromCart
};

export default Product;