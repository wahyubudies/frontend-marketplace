import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from '../../../route/router';

const Sidebar = () => {
    const LOGO = "/img/logo.webp";
    return (
        <div className='w-[250px] overflow-y-auto h-dvh bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 px-4'>
            <div className='py-8'>
                <img src={LOGO} alt="" className="w-full max-w-[120px]" />
            </div>
            <div className="py-8">
                <ul className='w-full grid gap-2'>
                    <li>
                        <NavLink to={Router.admin.home} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Router.admin.category.home} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                            Category
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Router.admin.product.home} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                            Product
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="py-8 flex items-center">
                <NavLink to={Router.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
                <NavLink to={Router.home} className='bg-red-700 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;