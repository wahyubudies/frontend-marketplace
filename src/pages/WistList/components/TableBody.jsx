import { useNavigate } from "react-router-dom";
import { Product } from "../../../models";
import { toast } from "react-toastify";
import Router from "../../../route/router";
import { GeneralUtility } from "../../../utils";

const TableBody = ({ items }) => { 
    const TRASH_BUTTON = "/img/button-delete.webp";
    const navigate = useNavigate();
    return (
        <tbody>
            {items.map((item, index) => (
                <tr className='border-b-slate-400 border-r-slate-400 border-l-slate-400 border' key={index}>
                    <td className='py-2 px-4'>
                        <div className='flex items-center gap-4'>
                            <img src={item.productCoverImage} className='w-[100px] h-[100px] object-cover' alt="" />
                            <p className='text-green-bonek-1 font-medium '>
                                {item.product.name}
                            </p>
                        </div>
                    </td>
                    <td className='py-2 px-4'>
                        <p className='text-green-bonek-1 font-medium text-end'>
                            {GeneralUtility.formatRupiah(item.product.price)}
                        </p>
                    </td>
                    <td className='py-2 px-4'>
                        <img
                            role="presentation"
                            onClick={async () => {
                                const reply = await Product.removeFromWishlist(item.id);
                                if (reply.success) {
                                    navigate(Router.wistlist);
                                    toast.success("Berhasil menghapus dari keranjang!");
                                    return;
                                }
                                toast.error("Gagal menghapus dari keranjang!");
                            }}
                            className='w-8 h-8 float-end hover:scale-105 cursor-pointer'
                            src={TRASH_BUTTON} alt="" />

                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;