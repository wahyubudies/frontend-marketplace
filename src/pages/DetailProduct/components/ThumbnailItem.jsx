import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect } from 'react';
import { useRef } from 'react';

const PRODUCST_DUMMY = [
    "/img/products/1.jpg",
    "/img/products/2.jpg",
    "/img/products/3.jpg",
    "/img/products/4.jpg",
    "/img/products/5.jpg",
    "/img/products/6.jpg",
    "/img/products/7.jpg",
    "/img/products/8.jpg",
];

const ThumbnailItem = () => {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, []);

    return (
        <div className='w-full max-w-[500px] mx-auto'>
            <Splide
                ref={mainRef}
                options={{
                    type: "loop",
                    rewind: true,
                    perPage: 1,
                    perMove: 1,
                    pagination: false,
                    arrows: false
                }} aria-label="Slider Promo">
                {
                    PRODUCST_DUMMY.map((item, index) => (
                        <SplideSlide key={index}>
                            <img src={item} alt="" className='w-full h-full object-cover' />
                        </SplideSlide>
                    ))
                }
            </Splide>
            <div className='mb-1.5'></div>
            <Splide
                ref={thumbsRef}
                options={{
                    type: "slide",
                    rewind: true,
                    perMove: 1,
                    pagination: false,
                    fixedWidth: 110,
                    fixedHeight: 70,
                    cover: true,
                    isNavigation: true,
                    arrows: false
                }} aria-label="Slider Promo">
                {
                    PRODUCST_DUMMY.map((item, index) => (
                        <SplideSlide className="p-4" key={index}>
                            <img src={item} alt="" className='w-full h-full object-cover' />
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    );
};

export default ThumbnailItem;