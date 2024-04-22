import { RequestUtility } from "../utils/request";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const register = async (data) => {
    const { response } = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_URL + "/auth/signup",
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
        url: SERVER_URL + "/auth/signin",
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