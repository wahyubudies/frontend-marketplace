import { Category, Product } from "../models";

const getCategories = async () => {
    return await Category.getListTable();
};

const getProducts = async ({
    productName,
    type,
    category
}) => {
    return await Product.getProductList({
        offset: 0,
        limit: 8,
        type,
        category,
        search: productName
    });
};

const catalogLoader = async ({
    productName,
    type,
    category
}) => {
    const [
        categories,
        products
    ] = await Promise.all([
        getCategories(),
        getProducts({
            productName,
            type,
            category
        })
    ]);

    return {
        categories: categories.data,
        products: products.data
    };
};

export default catalogLoader;