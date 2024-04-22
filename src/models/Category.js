import { RequestUtility } from "../utils";
const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


const getListTable = async () => {
  const response = await RequestUtility.sendRequest({
    method: "get",
    url: SERVER_ENDPOINT + "/categories",
    data: null,
    type: "json",
  });

  let result = {};
  if (response.status === 200 || response.status === 201) {
    const formattedData = response.data.data.map((item) => {
      return {
        id: item.id,
        icon: SERVER_URL + "/" + item.icon,
        name: item.name,
        createdAt: item.createdAt,
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

const getDetailCategory = async (id) => {
  const response = await RequestUtility.sendRequest({
    method: "get",
    url: SERVER_ENDPOINT + "/category/" + id,
    data: null,
    type: "json",
  });

  let result = {};
  if (response.status === 200 || response.status === 201) {
    const data = response.data.data;

    const object = {
      id: data.id,
      icon: SERVER_URL + "/" + data.icon,
      name: data.name,
      createdAt: data.createdAt,
      updatedAt: data.createdAt,
    };

    result = RequestUtility.standardResponse({
      success: true,
      code: response.status,
      data: object,
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

const addCategory = async (data) => {
  const response = await RequestUtility.sendRequest({
    method: "post",
    url: SERVER_ENDPOINT + "/category",
    data,
    type: "form",
  });

  let result = {};
  if (response.status === 200 || response.status === 201) {
    result = RequestUtility.standardResponse({
      success: true,
      code: response.status,
      data: response.data.data,
      message: "Kategori berhasil di tambahkan",
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

const editCategory = async (data) => {
  console.log(data);
  const response = await RequestUtility.sendRequest({
    method: "put",
    url: SERVER_ENDPOINT + "/admin/category",
    data,
    type: "form",
  });

  let result = {};
  if (response.status === 200 || response.status === 201) {
    result = RequestUtility.standardResponse({
      success: true,
      code: response.status,
      data: response.data.data,
      message: "Kategori berhasil di tambahkan",
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

const Category = {
  getListTable,
  addCategory,
  getDetailCategory,
  editCategory
};

export default Category;
