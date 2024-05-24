import Product from "../../models/Product";

const adminProductLoader = async () => {
    const reply = await Product.getListTableMerchant()
    return reply.data;
};


export default adminProductLoader;