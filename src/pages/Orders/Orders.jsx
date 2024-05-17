import { useLoaderData } from "react-router-dom";
import { GeneralUtility } from "../../utils";
import action from "./Action";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const OrderPage = () => {
  const ordersResponse = useLoaderData();
  const is = true;
  
  return (
    <div>
      <h2>History Order</h2>
      <div className="gap-2 flex flex-col">
        {ordersResponse.map((item) => (
          <div key={item.id} className="bg-slate-50 p-4 flex justify-between	">
            <div>
              <p className="font-semibold text-zinc-900">{item.code}</p>
              <p className="font-bold text-zinc-900">
                Total: {GeneralUtility.formatRupiah(item.totalPrice)}
              </p>

              <div className="flex border-2	w-max p-2 mt-4">
                {item.productItem.map((val) => (
                  <div key={val.id}>
                    <img
                      src={SERVER_URL + "/" + val.product.imageProduct[0].image}
                      alt={val.product.name}
                      width="90px"
                    />
                    <p className="text-xs">{val.product.name}</p>
                    <p className="text-xs	">QTY: {val.qty}</p>
                    <p className="text-xs	">
                      Harga: {GeneralUtility.formatRupiah(val.product.price)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <p className={`${action.infoColorStatus(item.status)}`}>
                {action.infoStatus(item.status)}
              </p>
              {item.status === "WAITING PAYMENT" ? (
                <p className="text-sm	">kirim Bukti Pembayaran</p>
              ) : (
                <p className="text-sm"></p>
              )}
              {item.status === "WAITING PAYMENT" ? (
                <div className="grid gap-4">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                         file:border-0
                        file:text-sm file:font-semibold
                      "
                    />
                  </label>
                  <button   className={`${is ? 'bg-slate-300' : 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'} text-white  font-medium rounded-lg text-sm px-8 py-2.5 text-center`}>Kirim</button>

                </div>
              ) : (
                <img
                  src={SERVER_URL + "/" + item.proofPayment}
                  alt=""
                  className="w-44 h-56"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
