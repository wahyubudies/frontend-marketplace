import { RequestUtility } from "../utils";
const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;

const register = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_ENDPOINT + "/auth/signup",
        data,
        type: "json"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: response.data.data,
            message: "Berhasil mendaftarkan diri!",
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

const login = async (data) => {
    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_ENDPOINT + "/auth/signin",
        data,
        type: "json"
    });

    let result = {};
    if (response.status === 200 || response.status === 201) {
        result = RequestUtility.standardResponse({
            success: true,
            code: response.status,
            data: response.data.data,
            message: "Berhasil masuk!",
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

const Auth = {
    register,
    login
};

export default Auth;