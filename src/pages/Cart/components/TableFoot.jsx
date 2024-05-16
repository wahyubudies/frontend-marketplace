import React from 'react';
import Swal from 'sweetalert2';
import { Product } from "../../../models";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Router from '../../../route/router';
import { GeneralUtility } from '../../../utils';
const TableFoot = ({ totalPrice, items }) => {
    const navigate = useNavigate();
    return (
        <tfoot>
            <tr>
                <td className="py-2 px-4 bg-green-bonek-2" colSpan={4}>
                    <div className='flex justify-between w-full items-center h-full'>
                        <p className='text-white font-bold text-lg'>
                            Total Pesanan
                        </p>
                        <p className='text-white font-bold text-lg'>
                            {GeneralUtility.formatRupiah(totalPrice)}
                        </p>
                    </div>
                </td>
                <td className='bg-green-bonek-1'>
                    <button onClick={() => {
                        Swal.fire({
                            title: 'Checkout!',
                            text: 'Apakah anda ingin checkout barang ?',
                            icon: 'question',
                            confirmButtonText: 'Yes',
                            showCancelButton: true
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                const idProducts = items.map(item => item.id);
                                const reply = await Product.checkout({cart: idProducts});
                                if (!reply.success) {
                                    return toast.error(reply.message);
                                }

                                navigate(Router["success-checkout"]);
                            }
                        });
                    }} className='bg-green-bonek-1 p-4 text-white border-0 w-full hover:bg-black'>
                        Checkout
                    </button>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFoot;