import Product from "../../models/Product";

const adminCategoryDropdownLoader = async () => {
    const reply = await Product.getListCategory();
    return reply.data;
};

export default adminCategoryDropdownLoader;