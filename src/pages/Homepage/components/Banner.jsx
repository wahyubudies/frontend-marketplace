import React from 'react';
import { Container } from '../../../components';
import Router from '../../../route/router';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    const IMAGE_STORE = "/img/store-banner.webp";
    return (
        <div className='w-full bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 py-10'>
            <Container className="min-h-dvh h-full grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                <div>
                    <h1 className='text-white font-bold text-4xl leading-tight'>Cari Kebutuhanmu <br /> Disini</h1>
                    <p className='text-white my-4'>Kami dengan bangga mempersembahkan kepada Anda ragam produk unik dan berkualitas dari UMKM Surabaya yang siap memikat hati Anda. Dari kuliner lezat hingga kerajinan tangan yang memukau, kami hadirkan segala sesuatu yang Anda butuhkan untuk memenuhi kebutuhan sehari-hari Anda dengan gaya yang tak tertandingi.</p>
                    <NavLink to={Router.catalog} className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                        Ayo Belanja Sekarang
                    </NavLink>
                </div>
                <div className='-order-1 lg:order-1'>
                    <img src={IMAGE_STORE} className='w-full h-full max-w-[500px] mx-auto' alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Banner;