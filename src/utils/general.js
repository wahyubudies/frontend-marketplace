import Cookies from "js-cookie";

const getUserInfo = () => {
    const userInfo = Cookies.get("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
};

const formatRupiah = (price) => {
    let reverse = price.toString().split('').reverse().join('');
    let value = reverse.match(/\d{1,3}/g);
    value = value.join('.').split('').reverse().join('');
    return 'Rp ' + value;
}

const GeneralUtility = {
    getUserInfo,
    formatRupiah
};

export default GeneralUtility;