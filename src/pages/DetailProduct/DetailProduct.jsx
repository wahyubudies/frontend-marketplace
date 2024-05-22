import {useState} from 'react';
import { ScrollTopButton } from '../../components';
import { BestSeller, ProductItem, SimilarProduct } from './components';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../models';
import { toast } from 'react-toastify';

const DetailProduct = () => {
    const [qty,setQty] = useState(1);
    const { item, bestSellerProducts, similarProducts } = useLoaderData();

    const decreaseQuantity = () => {
        if (qty > 1) {
            const newQty = qty - 1;
            setQty(newQty);
        }
    };
    
    const increaseQuantity = async () => {
        const newQty = qty + 1;
        setQty(newQty);
    };

    const handleAddToCart = async () => {
        const reply = await Product.addToCart({
            productId: item?.id,
            qty: qty
        });
        if (reply.success) {
            return toast.success("Sukses menambahkan ke keranjang!");
        }
        toast.error(reply.message);
    }


    return (
        <>
            <ProductItem item={item}  handleAddToCart={handleAddToCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} qty={qty} />
            <SimilarProduct products={similarProducts.products} />
            <BestSeller products={bestSellerProducts.products} />
            <ScrollTopButton />
        </>
    );
};

export default DetailProduct;