import React from 'react';

const ScrollTopButton = () => {
    const SCROLL_TOP = "/img/button-to-top.webp";
    return (
        <button
            className='fixed bottom-4 right-4'
            onClick={
                () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth" // Smooth scrolling animation
                    });
                }
            }>
            <img src={SCROLL_TOP} alt="" className='w-[40px] h-[40px]' />
        </button>
    );

};

export default ScrollTopButton;