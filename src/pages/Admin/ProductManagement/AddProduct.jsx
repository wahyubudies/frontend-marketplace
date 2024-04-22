import React, { useState } from 'react';
import { Headline } from '../../../components';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Router from '../../../route/router';
import Action from "./Action";

const AddProduct = () => {
    const categoryDropdown = useLoaderData();
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    return (
        <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
            <Headline type="blue" title="Tambah Produk" />
            <form onSubmit={(e) => Action.onSubmit({ e, form, navigate })}>
                <div className='grid grid-cols-2 gap-4 w-full mt-8'>
                    <div>
                        <label htmlFor="name" className='inline-block laeding-tight font-semibold text-slate-500'>
                            Nama Produk
                        </label>
                        <input
                            onChange={(e) => Action.onChangeField({ e, form, setForm })}
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
                            id="stock"
                            name="stock"
                            type="number"
                            className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                    </div>
                    <div>
                        <label htmlFor="category" className='inline-block laeding-tight font-semibold text-slate-500'>
                            Kategori
                        </label>
                        <select
                            onChange={(e) => Action.onChangeField({ e, form, setForm })}
                            id="category"
                            name="category"
                            type="number"
                            className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2'>
                            {categoryDropdown.map(({ name, id }, index) => (
                                <option key={index} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="weight" className='inline-block laeding-tight font-semibold text-slate-500'>
                            Berat
                        </label>
                        <input
                            onChange={(e) => Action.onChangeField({ e, form, setForm })}
                            id="weight"
                            name="weight"
                            type="number"
                            className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                    </div>
                    <div>
                        <label htmlFor="imageProduct" className='inline-block laeding-tight font-semibold text-slate-500'>
                            Gambar Produk
                        </label>
                        <input
                            onChange={(e) => Action.onChangeField({ e, form, setForm })}
                            multiple
                            accept="image/png, image/jpeg, image/webp"
                            id="imageProduct"
                            name="imageProduct"
                            type="file"
                            className='w-full bg-[#f1f1f1] px-4 py-1.5 rounded mt-2' />
                    </div>
                </div>
                <div className='mt-4'>
                    <label htmlFor="description" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Deskripsi
                    </label>
                    <textarea
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
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
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;