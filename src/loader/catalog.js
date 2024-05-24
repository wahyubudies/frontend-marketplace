import { Category, Product } from "../models";

const getCategories = async () => {
    return await Category.getListTable();
};

const getProducts = async ({
    name,
    type,
    categoryId,
}) => {
    const params = {
        offset: 0,
        limit: 8,
        name,
        type,
        categoryId,
    }
    return await Product.getProductList(params);
};

const catalogLoader = async ({
    name,
    type,
    categoryId
}) => {
    const [
        categories,
        products
    ] = await Promise.all([
        getCategories(),
        getProducts({
            name,
            type,
            categoryId,
        })
    ]);

    return {
        categories: categories.data,
        products: products.data
    };
};

export default catalogLoader;