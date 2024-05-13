import { Product } from "../models";

const item = async (idProduct) => {
    const item = await Product.getDetail(idProduct);
    return item.data;
};

const getSimilarProducts = async (idProduct) => {
    const item = await Product.getProductList({
        offset: 0,
        limit: 8,
        type: "similar",
        ["similar-product-id"]: idProduct
    });
    return item.data;
};

const getBestSellerProducts = async () => {
    const item = await Product.getProductList({
        offset: 0,
        limit: 8,
        type: "best-seller"
    });
    return item.data;
};

const detailProductLoader = async (idProduct) => {
    const [
        productItem,
        similarProducts,
        bestSellerProducts
    ] = await Promise.all([
        item(idProduct),
        getSimilarProducts(idProduct),
        getBestSellerProducts()
    ]);

    return {
        item: productItem,
        similarProducts: similarProducts,
        bestSellerProducts: bestSellerProducts
    };
};

export default detailProductLoader;