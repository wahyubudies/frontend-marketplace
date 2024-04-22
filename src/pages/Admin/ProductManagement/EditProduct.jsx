import React, { useState } from 'react';
import { Headline } from '../../../components';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Router from '../../../route/router';
import Action from './Action';

const EditProduct = () => {
    const navigate = useNavigate();
    const { productItem, categories } = useLoaderData();
    const [form, setForm] = useState({
        id: productItem.id,
        name: productItem.name,
        price: productItem.price,
        stock: productItem.stock,
        category: productItem.category.id,
        weight: productItem.weight,
        description: productItem.description
    });

    return (
        <form onSubmit={(e) => Action.onUpdate({ e, form, navigate })} className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
            <Headline type="blue" title="Edit Produk" />
            <div className='grid grid-cols-2 gap-4 w-full mt-8'>
                <div>
                    <label htmlFor="name" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Nama Produk
                    </label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        defaultValue={form.name}
                        id="name"
                        name="name"
                        type="text"
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                </div>
                <div>
                    <label htmlFor="price" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Harga
                    </label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        defaultValue={form.price}
                        id="price"
                        name="price"
                        type="number"
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                </div>
                <div>
                    <label htmlFor="stock" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Stok
                    </label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        defaultValue={form.stock}
                        id="stock"
                        name="stock"
                        type="number"
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                </div>
                <div>
                    <label htmlFor="category" className='inline-block leading-tight font-semibold text-slate-500'>
                        Kategori
                    </label>
                    <select
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        defaultValue={form.category.id}
                        id="category"
                        name="category"
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2'>
                        {categories.map(({ name, id }) => (
                            <option key={id} value={id}>{name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='mt-4'>
                <label htmlFor="weight" className='inline-block laeding-tight font-semibold text-slate-500'>
                    Berat
                </label>
                <input
                    onChange={(e) => Action.onChangeField({ e, form, setForm })}
                    defaultValue={form.weight}
                    id="weight"
                    name="weight"
                    type="number"
                    className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
            </div>
            <div className='mt-4'>
                <label htmlFor="description" className='inline-block laeding-tight font-semibold text-slate-500'>
                    Deskripsi
                </label>
                <textarea
                    onChange={(e) => Action.onChangeField({ e, form, setForm })}
                    defaultValue={form.description}
                    id="description"
                    name="description"
                    className='w-full bg-[#f1f1f1] px-4 py-1.5 rounded mt-2'>
                </textarea>
            </div>
            <div className="flex items-center mt-6">
                <NavLink to={Router.admin.product.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
                <button
                    type="submit"
                    className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                    Update
                </button>
            </div>
        </form>
    );
};

export default EditProduct;