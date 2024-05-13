import { Product } from "../../models";

const getMoreNewProducts = async ({
    offset,
    limit
}) => {
    return await Product.getProductList({
        offset, limit
    });
};

const loadMoreProducts = async ({
    items,
    total,
    page,
    setItems,
    setTotal,
    setPage
}) => {
    if (total > page) {
        const newProducts = await getMoreNewProducts({
            offset: page + 1,
            limit: 8,
        });

        setItems([...items, ...newProducts.data.products]);
        setPage(page + 1);
        setTotal(newProducts.data.page.totalData);
    }
};

const Action = {
    getMoreNewProducts,
    loadMoreProducts
};

export default Action;