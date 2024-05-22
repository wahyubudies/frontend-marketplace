import { useState } from 'react';
import { Product } from '../models';
import { toast } from 'react-toastify';

const QtyButton = ({ className, qty,cartId }) => {
    const [quantity, setQuantity] = useState(qty || 1);

    const decreaseQuantity = async () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);

            const reply = await Product.updateCart({
                cartId: cartId,
                qty: newQty
            });
            
            if (reply.success) {
                window.location.reload()
                return toast.success("Sukses menambahkan ke keranjang!");
            }
            toast.error(reply.message);
        }
    };

    const increaseQuantity = async () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        const reply = await Product.updateCart({
            cartId: cartId,
            qty: newQty
        });

        if (reply.success) {
            window.location.reload()
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
