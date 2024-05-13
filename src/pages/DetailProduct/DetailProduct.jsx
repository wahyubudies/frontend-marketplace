import React from 'react';
import { ScrollTopButton } from '../../components';
import { BestSeller, ProductItem, SimilarProduct } from './components';
import { useLoaderData } from 'react-router-dom';

const DetailProduct = () => {
    const { item, bestSellerProducts, similarProducts } = useLoaderData();
    return (
        <>
            <ProductItem item={item} />
            <SimilarProduct products={similarProducts.products} />
            <BestSeller products={bestSellerProducts.products} />
            <ScrollTopButton />
        </>
    );
};

export default DetailProduct;