import { Product } from "../models";

export default async () => {
    const reply = await Product.getWishlist()
    return reply
}