const infoStatus = (status) =>{

    if(status === "WAITING PAYMENT"){
        return "Menunggu Pembayaran"
    } else if(status === "PAID"){
        return "Pembayaran Berhasil"
    } else{
        return "Invalid Status"
    }

}
const infoColorStatus = (status) =>{

    if(status === "WAITING PAYMENT"){
        return "text-amber-400 font-semibold"
    } else if(status === "PAID"){
        return "text-green-500 font-semibold"
    } else{
        return "text-rose-500 font-semibold"
    }

}

const Action = {
    infoStatus,
    infoColorStatus
};

export default Action;