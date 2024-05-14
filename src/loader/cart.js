import { Product } from "../models";

const cartLoader = async () => {
    const reply = await Product.getCart();
    return reply.data
}

export default cartLoader;