import React from 'react';

const TableHead = () => {
    return (
        <thead className='bg-blue-bonek'>
            <tr>
                <td className='py-3 px-4'>
                    <p className='text-white font-bold text-lg'>
                        Produk
                    </p>
                </td>
                <td className='py-3 px-4'>
                    <p className='text-white font-bold text-lg text-end'>
                        Harga
                    </p>
                </td>
                <td className='py-3 px-4'>
                    <p className='text-white font-bold text-lg text-end'>
                        Jumlah
                    </p>
                </td>
                <td className='py-3 px-4'>
                    <p className='text-white font-bold text-lg text-end'>
                        Total
                    </p>
                </td>
                <td className='py-3 px-4'>
                    <p className='text-white font-bold text-lg text-end'>
                        Hapus
                    </p>
                </td>
            </tr>
        </thead>
    );
};

export default TableHead;