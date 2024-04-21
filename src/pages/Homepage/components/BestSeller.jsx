import React from 'react';
import { CardProduct, Container, Headline } from '../../../components';

const BestSeller = () => {
    return (
        <div className='py-10 bg-white'>
            <Container>
                <Headline type="blue" title="Terlaris" />
                <div className='py-10'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                    </div>
                    <button className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mx-auto block'>
                        Lihat Lebih Banyak
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default BestSeller;