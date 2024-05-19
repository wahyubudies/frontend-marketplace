import Cookies from "js-cookie";
import { Product } from "../models";

const cartLoader = async () => {
    const token = Cookies.get("userInfo");
    if (!token) {
        return {
            success: false,
            code: 500,
            data: null,
            message: "User have not login yet!"
        };
    }
    const reply = await Product.getCart();
    return reply;
};

export default cartLoader;