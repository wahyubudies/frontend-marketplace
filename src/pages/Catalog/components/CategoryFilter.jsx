import React from 'react';

const CategoryFilter = ({ categories }) => {
    return (
        <div className='gap-2 grid h-full'>
            <div>
                <p className='text-white font-bold tracking-wider'>
                    Semua Kategori
                </p>
            </div>
            {categories.map(({ name }, index) => (
                <div className='hover:bg-white text-white   hover:text-green-bonek-1 py-2 px-4 rounded-lg cursor-pointer' key={index}>
                    <p className='font-medium tracking-wider'>
                        {name}
                    </p>
                </div>
            ))}

        </div>
    );
};

export default CategoryFilter;