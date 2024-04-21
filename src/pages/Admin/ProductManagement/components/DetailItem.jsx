import React from 'react';

const DetailItem = () => {
    return (
        <div className='px-4 py-6 w-full box-border'>
            <div className='grid gap-4 grid-cols-3 w-full'>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Kategori</label>
                    <p id="category" className='text-slate-400 '>
                        Fashion
                    </p>
                </div>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Berat</label>
                    <p id="category" className='text-slate-400 '>
                        1000g
                    </p>
                </div>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Deskripsi</label>
                    <p id="category" className='text-slate-400 '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, a sint! Quae eaque voluptatum sapiente eligendi animi facere impedit iure, delectus excepturi dignissimos, reiciendis commodi qui saepe alias mollitia harum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailItem;