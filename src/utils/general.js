import Cookies from "js-cookie";

const getUserInfo = () => {
    const userInfo = Cookies.get("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
};

const GeneralUtility = {
    getUserInfo
};

export { GeneralUtility };