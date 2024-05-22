import { Product } from "../models";
import Cookies from "js-cookie";

export default async () => {
    const token = Cookies.get("userInfo");
    if (!token) {
        return {
            success: false,
            code: 500,
            data: null,
            message: "User have not login yet!"
        };
    }
    const reply = await Product.getWishlist()
    return reply
}