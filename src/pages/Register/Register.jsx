import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Router from '../../route/router';
import Action from './Action';

const Register = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    return (
        <div className='w-full h-[100dvh] bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 items-center justify-center flex'>
            <form onSubmit={(e) => Action.onSubmit({ e, form, navigate })} className="p-6 bg-gray-bonek rounded-3xl max-w-[500px] w-3/4">
                <h3 className='text-center text-green-bonek-1 mb-2 font-bold text-2xl'>Daftar Akun</h3>
                <div className='mb-2'>
                    <label
                        htmlFor='fullName'
                        className='block text-gray-700 mb-2'>Nama Lengkap</label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        name='fullName'
                        type='text'
                        placeholder='Nama Legkap'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='phoneNumber'
                        className='block text-gray-700 mb-2'>No. Telp Whatsapp</label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        name='phoneNumber'
                        type='text'
                        placeholder='No. Telp Whatsapp'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='address'
                        className='block text-gray-700 mb-2'>Alamat Lengkap</label>
                    <textarea
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        name='address'
                        type='text'
                        placeholder='Alamat Lengkap'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                    </textarea>
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 mb-2'>Email Aktif</label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        name='email'
                        type='email'
                        placeholder='Email Aktif'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='password'
                        className='block text-gray-700 mb-2' >Password</label>
                    <input
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="flex items-center w-full justify-between mt-4">
                    <p className='text-slate-700'>Sudah punya akun ? <NavLink to={Router.login} className='text-blue-bonek hover:underline'>Masuk</NavLink></p>
                    <div className="flex items-center">
                        <NavLink to={Router.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded mr-3'>
                            Kembali
                        </NavLink>
                        <button
                            type='submit'
                            className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded'>
                            Daftar
                        </button>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default Register;