import React from 'react';
import { NavLink } from 'react-router-dom';

const CardProduct = ({ type }) => {
    const WistList_BUTTON = "/img/white-star.webp";

    const bgContent = type === "green" ? "bg-green-bonek-1" : "bg-white";
    const textContent = type === "green" ? "text-white" : "text-green-bonek-1";
    const cartIcon = type === "green" ? "/img/white-cart.webp" : "/img/green-cart.webp";

    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={WistList_BUTTON}
                    className='absolute top-3 right-3 rounded-t-2xl w-6 h-6 cursor-pointer hover:scale-105' />
                <img src='/img/t-shirt.webp'
                    className="w-full h-[250px] object-cover rounded-t-2xl"
                    alt="" />
            </div>
            <div className={`${bgContent} p-3 rounded-b-2xl flex items-center justify-between`}>
                <div className='leading-tight'>
                    <NavLink
                        to={`/detail-product/test-product`}
                        className={`${textContent} font-semibold`}>
                        Green T-Shrit
                    </NavLink>
                    <p className={`${textContent} font-light`}>Rp40,000</p>
                </div>
                <img src={cartIcon}
                    alt=""
                    className='cursor-pointer hover:scale-105 w-6 h-6' />
            </div>
        </div>
    );
};

export default CardProduct;