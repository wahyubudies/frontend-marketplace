import Product from "../../models/Product";

const adminProductDetailLoader = async (id) => {
    const [productItem, categories] = await Promise.all([
        Product.getDetail(id),
        Product.getListCategory()
    ]);
    return {
        productItem: productItem.data,
        categories: categories.data
    };
};

export default adminProductDetailLoader;