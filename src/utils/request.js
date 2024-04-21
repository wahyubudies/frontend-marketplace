import axios from "axios";

const findType = (type) => {
    switch (type) {
        case "urlencoded":
            return "application/x-www-form-urlencoded";

        case "form":
            return "multipart/form-data";

        default:
            return "application/json";
    }
};

const sendRequest = ({ method, url, data, type }) => {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data,
            headers: {
                'Content-Type': findType(type)
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const RequestUtility = {
    sendRequest
};

export default RequestUtility;