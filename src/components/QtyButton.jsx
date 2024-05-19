import React, { useState } from 'react';
import { Product } from '../models';
import { toast } from 'react-toastify';

const QtyButton = ({ className, productId, qty }) => {
    const [quantity, setQuantity] = useState(qty || 1);

    const decreaseQuantity = async () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            const reply = await Product.addToCart({
                productId: productId,
                qty: quantity
            });
            console.log(reply);
            if (reply.success) {
                setQuantity(newQty);
                return toast.success("Sukses menambahkan ke keranjang!");
            }
            toast.error(reply.message);
        }
    };

    const increaseQuantity = async () => {
        const newQty = quantity + 1;
        const reply = await Product.addToCart({
            productId: productId,
            qty: quantity
        });
        if (reply.success) {
            setQuantity(newQty);
            return toast.success("Sukses menambahkan ke keranjang!");
        }
        toast.error(reply.message);
    };

    return (
        <div className={`flex items-center border bg-slate-400 rounded-2xl ${className}`}>
            <button className="text-slate-800 px-3 py-1" onClick={decreaseQuantity}>
                -
            </button>
            <input type="text" className="bg-slate-400 w-16 text-center border-0 outline-0" value={quantity} readOnly />
            <button
                className="text-slate-800 px-3 py-1" onClick={increaseQuantity}>
                +
            </button>
        </div>
    );
};

export default QtyButton;
