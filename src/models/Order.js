import { RequestUtility } from "../utils";
const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getListOrder = async () => {
    const response = await RequestUtility.sendRequest({
      method: "get",
      url: SERVER_ENDPOINT + "/user/checkouts",
      data: null,
      type: "json",
    });
  
    let result = {};
    if (response.status === 200 || response.status === 201) {
      const formattedData = response.data.data.map((item) => {
        return {
          id: item.id,
          icon: SERVER_URL + "/" + item.icon,
          code: item.code,
          totalPrice: item.totalPrice,
          status: item.transactionstatus.name,
          proofPayment: item.proofPayment || "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp",
          productItem: [...item.items],
          cover:"https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp"
        };
      });
  
      result = RequestUtility.standardResponse({
        success: true,
        code: response.status,
        data: formattedData,
        message: "Berhasil menampilkan!",
      });
    } else {
      result = RequestUtility.standardResponse({
        success: false,
        code: response.status,
        data: null,
        message: response.data.message,
      });
    }
    return result;
  };

  
  const proofPayment = async (data) => {
    const response = await RequestUtility.sendRequest({
      method: "PUT",
      url: SERVER_ENDPOINT + "/user/checkout-payment",
      data,
      type: "form",
    });
  
    let result = {};
    if (response.status === 200 || response.status === 201) {
  
      result = RequestUtility.standardResponse({
        success: true,
        code: response.status,
        data: response.data,
        message: "update berhasil",
      });
    } else {
      result = RequestUtility.standardResponse({
        success: false,
        code: response.status,
        data: null,
        message: response.data.message,
      });
    }
    return result;
  };

  const chartAdmin = async (data) => {
    const response = await RequestUtility.sendRequest({
      method: "GET",
      url: SERVER_ENDPOINT + "/admin/chart",
      data,
      type: "json",
    });
  
    let result = {};
    if (response.status === 200 || response.status === 201) {
  
      result = RequestUtility.standardResponse({
        success: true,
        code: response.status,
        data: response.data,
        message: "update berhasil",
      });
    } else {
      result = RequestUtility.standardResponse({
        success: false,
        code: response.status,
        data: null,
        message: response.data.message,
      });
    }
    return result;
  };




const Order = {
    getListOrder,
    proofPayment,
    chartAdmin
  };
  
  export default Order;
  