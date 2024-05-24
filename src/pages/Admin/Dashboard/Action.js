import {Order} from '../../../models'

const getChart = async () => {

    const data = await Order.chartAdmin();
    return data;

}

const Action = {
    getChart
};

export default Action;