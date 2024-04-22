import React from 'react';

const DetailItem = ({ data }) => {
    const { weight, category, description } = data;
    return (
        <div className='px-4 py-6 w-full box-border'>
            <div className='grid gap-4 grid-cols-3 w-full'>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Kategori</label>
                    <p id="category" className='text-slate-400 '>
                        <span className='capitalize'>{category}</span>
                    </p>
                </div>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Berat</label>
                    <p id="category" className='text-slate-400 '>
                        <span className='capitalize'>{weight}</span>g
                    </p>
                </div>
                <div className='leading-tight'>
                    <label htmlFor="category" className='font-bold mb-1 inline-block text-sm'>Deskripsi</label>
                    <p id="category" className='text-slate-400 '>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailItem;