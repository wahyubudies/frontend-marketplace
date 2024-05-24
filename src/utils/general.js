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

const months = (options) => {
    const count = options.count || 12; 
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    const monthLabels = [];
    for (let i = count - 1; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - i, 1);
      const monthLabel = date.toLocaleString('default', { month: 'long' });
      monthLabels.push(monthLabel);
    }
  
    return monthLabels;
  };
  

const GeneralUtility = {
    getUserInfo,
    formatRupiah,
    months
};

export default GeneralUtility;