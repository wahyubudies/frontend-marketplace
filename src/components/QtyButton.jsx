import React, { useState } from 'react';

const QtyButton = ({ className }) => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className={`flex items-center border bg-slate-400 rounded-2xl ${className}`}>
            <button className="text-slate-800 px-3 py-1" onClick={decreaseQuantity}>
                -
            </button>
            <input type="text" className="bg-slate-400 w-16 text-center border-0 outline-0" value={quantity} readOnly />
            <button className="text-slate-800 px-3 py-1" onClick={increaseQuantity}>
                +
            </button>
        </div>
    );
};

export default QtyButton;
