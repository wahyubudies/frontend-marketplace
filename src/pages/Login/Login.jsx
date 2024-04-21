import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from '../../route/router';

const Login = () => {
    return (
        <div className='w-full h-[100dvh] bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 items-center justify-center flex'>
            <div className="p-6 bg-gray-bonek rounded-3xl max-w-[500px] w-3/4">
                <h3 className='text-center text-green-bonek-1 mb-2 font-bold text-2xl'>Masuk Akun</h3>
                <div className='mb-2'>
                    <label
                        htmlFor='username'
                        className='block text-gray-700 mb-2' >Username</label>
                    <input
                        name='username'
                        type='text'
                        placeholder='Username'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='password'
                        className='block text-gray-700 mb-2' >Password</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="flex items-center w-full justify-between mt-4">
                    <p className='text-slate-700'>Belum punya akun ? <NavLink to={Router.register} className='text-blue-bonek hover:underline'>Daftar</NavLink></p>
                    <div className="flex items-center">
                        <NavLink to={Router.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded mr-3'>
                            Kembali
                        </NavLink>
                        <button
                            onClick={() => {
                                window.location.href = "/admin";
                            }}
                            className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded'>
                            Masuk
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;