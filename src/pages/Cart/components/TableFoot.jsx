import React from 'react';

const TableFoot = () => {
    return (
        <tfoot>
            <tr>
                <td className="py-2 px-4 bg-green-bonek-2" colSpan={4}>
                    <div className='flex justify-between w-full items-center h-full'>
                        <p className='text-white font-bold text-lg'>
                            Total Pesanan
                        </p>
                        <p className='text-white font-bold text-lg'>
                            Rp50,000
                        </p>
                    </div>
                </td>
                <td className='bg-green-bonek-1'>
                    <button className='bg-green-bonek-1 p-4 text-white border-0 w-full hover:bg-black'>
                        Checkout
                    </button>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFoot;