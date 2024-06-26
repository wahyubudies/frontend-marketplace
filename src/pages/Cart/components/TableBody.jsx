import { QtyButton } from "../../../components";
import { Product } from "../../../models";
import { toast } from "react-toastify";
import { GeneralUtility } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Router from "../../../route/router";

const TableBody = ({ items }) => {
    
  const TRASH_BUTTON = "/img/button-delete.webp";
  const navigate = useNavigate();

  return (
    <tbody>
      {items.map(({ id, name, photo, price, qty }, index) => (
        <tr
          className="border-b-slate-400 border-r-slate-400 border-l-slate-400 border"
          key={index}
        >
          <td className="py-2 px-4">
            <div className="flex items-center gap-4">
              <img
                src={photo}
                className="w-[100px] h-[100px] object-cover"
                alt=""
              />
              <p className="text-green-bonek-1 font-medium ">{name}</p>
            </div>
          </td>
          <td className="py-2 px-4">
            <p className="text-green-bonek-1 font-medium text-end">
              {GeneralUtility.formatRupiah(price)}
            </p>
          </td>
          <td className="py-2 px-4">
            <QtyButton
              className="w-fit float-end"
              productId={id}
              qty={qty}
              cartId={id}
            />
          </td>
          <td className="py-2 px-4">
            <p className="text-green-bonek-1 font-medium text-end">
              {GeneralUtility.formatRupiah(price * qty)}
            </p>
          </td>
          <td className="py-2 px-4">
            <img
              role="presentation"
              onClick={async () => {
                const reply = await Product.removeFromCart(id);
                if (reply.success) {
                  navigate(Router.cart);
                  toast.success("Berhasil menghapus dari keranjang!");
                  return;
                }
                toast.error("Gagal menghapus dari keranjang!");
              }}
              className="w-8 h-8 float-end hover:scale-105 cursor-pointer"
              src={TRASH_BUTTON}
              alt=""
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
