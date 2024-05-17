import { Order } from "../models";

const ordersLoader = async () => {
    const reply = await Order.getListOrder();
    return reply.data
}
export default ordersLoader;