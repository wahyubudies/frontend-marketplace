import axios from "axios";
import Cookies from "js-cookie";

const getTypeRequest = (type) => {
    switch (type) {
        case "urlencoded":
            return "application/x-www-form-urlencoded";

        case "form":
            return "multipart/form-data";

        default:
            return "application/json";
    }
};

const standardResponse = ({
    success = "",
    code = "",
    data = null,
    message = "",
}) => {
    return {
        success,
        code,
        data,
        message,
    };
};

const sendRequest = async ({ method, url, data, type, params, useToken = true }) => {
    try {
        const token = useToken ? JSON.parse(Cookies.get("userInfo")).token : null;
        const headers = {
            'Content-Type': getTypeRequest(type)
        };

        if (useToken) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await axios({
            method,
            url,
            data,
            params,
            headers
        });

        return response;
    } catch (error) {
        return {
            data: error.response.data,
            status: error.response.status,
            statusText: error.response.statusText,
            headers: error.response.headers
        };
    }
};

const RequestUtility = {
    sendRequest,
    standardResponse
};

export default RequestUtility;