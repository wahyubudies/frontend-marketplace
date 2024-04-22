import Product from "../../models/Product";

const adminProductLoader = async () => {
    const reply = await Product.getListTable();
    return reply.data;
};

export default adminProductLoader;