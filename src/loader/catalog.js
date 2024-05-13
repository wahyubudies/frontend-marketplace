import { Category, Product } from "../models";

const getCategories = async () => {
    return await Category.getListTable();
};

const getProducts = async () => {
    return await Product.getProductList({
        offset: 0,
        limit: 8
    });
};

const catalogLoader = async () => {
    const [
        categories,
        products
    ] = await Promise.all([
        getCategories(),
        getProducts()
    ]);

    return {
        categories: categories.data,
        products: products.data
    };
};

export default catalogLoader;