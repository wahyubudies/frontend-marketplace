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

const sendRequest = ({ method, url, data, type, params }) => {
    const token = JSON.parse(Cookies.get("userInfo")).token ?? null;

    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data,
            params,
            headers: {
                'Content-Type': getTypeRequest(type),
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve({
                    data: error.response.data,
                    status: error.response.status,
                    statusText: error.response.statusText,
                    headers: error.response.headers
                });
            });
    });
};

const RequestUtility = {
    sendRequest,
    standardResponse
};

export default RequestUtility;