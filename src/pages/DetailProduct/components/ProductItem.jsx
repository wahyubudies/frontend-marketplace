import {useState} from 'react'
import { Container, QtyButton } from '../../../components';
import { GeneralUtility } from '../../../utils';
import { ThumbnailItem,ButtonQty } from "./index";

const ProductItem = ({ item,handleAddToCart,decreaseQuantity,increaseQuantity,qty }) => {
   
    const { name, stock, price, merchant, description, weight, images } = item;



    return (
        <div className='py-10 bg-white'>
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <ThumbnailItem images={images} />
                </div>
                <div className='grid gap-4'>
                    <div className="flex w-full justify-between items-center">
                        <h1 className='font-bold text-green-bonek-1 text-3xl leading-tight'>
                            {name}
                        </h1>
                        <p className='text-slate-700 font-bold'>
                            Stock : {stock}
                        </p>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className='font-bold text-blue-bonek text-3xl leading-tight'>
                            {GeneralUtility.formatRupiah(price)}
                        </h1>
                        <p className='text-slate-700 font-bold'>
                            Berat Produk : {weight} gram
                        </p>
                    </div>
                    <p className="text-slate-700 text-justify">
                        {description}
                    </p>
                    <div className="grid gap-1">
                        <p className='text-slate-700 font-bold'>
                            Toko : {merchant.name}
                        </p>
                        <p className='text-slate-700 font-bold'>
                            Kontak : {merchant.phone_number}
                        </p>
                        <p className='text-slate-700 font-bold'>
                            Alamat : {merchant.address}
                        </p>
                    </div>
                    <div className='flex items-stretch'>
                       <ButtonQty decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} quantity={qty}  />
                        <button onClick={handleAddToCart} className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                            Tambahkan ke cart
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductItem;