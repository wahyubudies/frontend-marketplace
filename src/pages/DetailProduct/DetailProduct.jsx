import React from 'react';
import { ScrollTopButton } from '../../components';
import { BestSeller, ProductItem, SimilarProduct } from './components';

const DetailProduct = () => {
    return (
        <>
            <ProductItem />
            <SimilarProduct />
            <BestSeller />
            <ScrollTopButton />
        </>
    );
};

export default DetailProduct;