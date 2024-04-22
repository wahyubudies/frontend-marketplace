import Product from "../../models/Product";

const adminProductGalleryLoader = async (id) => {
    const reply = await Product.getGalleryItem(id);
    return reply.data;
};

export default adminProductGalleryLoader;