import React from 'react';
import { QtyButton } from '../../../components';

const TableBody = () => {
    const TRASH_BUTTON = "/img/button-delete.webp"; return (

        <tbody>
            <tr className='border-b-slate-400 border-r-slate-400 border-l-slate-400 border'>
                <td className='py-2 px-4'>
                    <div className='flex items-center gap-4'>
                        <img src='/img/t-shirt.webp' className='w-[100px] h-[100px] object-cover' alt="" />
                        <p className='text-green-bonek-1 font-medium '>
                            Nama Produk
                        </p>
                    </div>
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <QtyButton className="w-fit float-end" />
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <img
                        className='w-8 h-8 float-end hover:scale-105 cursor-pointer'
                        src={TRASH_BUTTON} alt="" />

                </td>
            </tr>
            <tr className='border-b-slate-400 border-r-slate-400 border-l-slate-400 border'>
                <td className='py-2 px-4'>
                    <div className='flex items-center gap-4'>
                        <img src='/img/t-shirt.webp' className='w-[100px] h-[100px] object-cover' alt="" />
                        <p className='text-green-bonek-1 font-medium '>
                            Nama Produk
                        </p>
                    </div>
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <QtyButton className="w-fit float-end" />
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <img
                        className='w-8 h-8 float-end hover:scale-105 cursor-pointer'
                        src={TRASH_BUTTON} alt="" />

                </td>
            </tr>
            <tr className='border-b-slate-400 border-r-slate-400 border-l-slate-400 border'>
                <td className='py-2 px-4'>
                    <div className='flex items-center gap-4'>
                        <img src='/img/t-shirt.webp' className='w-[100px] h-[100px] object-cover' alt="" />
                        <p className='text-green-bonek-1 font-medium '>
                            Nama Produk
                        </p>
                    </div>
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <QtyButton className="w-fit float-end" />
                </td>
                <td className='py-2 px-4'>
                    <p className='text-green-bonek-1 font-medium text-end'>
                        Rp10,000
                    </p>
                </td>
                <td className='py-2 px-4'>
                    <img
                        className='w-8 h-8 float-end hover:scale-105 cursor-pointer'
                        src={TRASH_BUTTON} alt="" />

                </td>
            </tr>
        </tbody>
    );
};

export default TableBody;