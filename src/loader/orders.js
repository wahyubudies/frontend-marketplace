import { Order } from "../models";

const ordersLoader = async () => {
    const reply = await Order.getListOrder();
    return reply.data
}

const getChart = async () => {
    return await Order.chartAdmin()
};

const orderLoader = async () => {
    const [
        orders,
       chartBar
    ] = await Promise.all([
       ordersLoader(),
       getChart()
    ]);

    return {
        orders: orders,
        chartBar: chartBar.data.data
    };
};

export default orderLoader