import { Category, Product } from "../models";

const getNewProducts = async () => {
    return await Product.getProductList({
        offset: 0,
        limit: 8,
        type: "new"
    });
};

const getBestSellerProducts = async () => {
    return await Product.getProductList({
        offset: 0,
        limit: 8,
        type: "best-seller"
    });
};

const getPromoProducts = async () => {
    return await Product.getProductList({
        offset: 0,
        limit: 8
    });
};

const getCategories = async () => {
    return await Category.getListTable();
};

const homepageLoader = async () => {
    const [
        newProducts,
        promoProducts,
        bestSellerProducts,
        categories
    ] = await Promise.all([
        getNewProducts(),
        getPromoProducts(),
        getBestSellerProducts(),
        getCategories()
    ]);

    return {
        newProducts: newProducts.data.products,
        promoProducts: promoProducts.data.products,
        bestSellerProducts: bestSellerProducts.data.products,
        categories: categories.data
    };
};

export default homepageLoader;