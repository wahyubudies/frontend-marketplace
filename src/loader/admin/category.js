import Category from '../../models/Category'

const adminCategoryLoader = async () => {
    const reply = await Category.getListTable();
    return reply.data;
};


export default adminCategoryLoader;