import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Router from '../../../route/router';
import Swal from 'sweetalert2';
import { store } from "../../../store";
import { logoutUser } from '../../../features/auth/authSlice';
import { GeneralUtility } from '../../../utils';


const Sidebar = () => {
    const LOGO = "/img/logo.webp";

    const [user, setUser] = useState({});

    useEffect(() => {
        const userInfo = GeneralUtility.getUserInfo();
        if (!userInfo) {
            return store.dispatch(logoutUser());
        }
        setUser(userInfo);
    }, []);

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
                    {user.role === "admin" ? (
                        <li>
                            <NavLink to={Router.admin.category.home} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                                Category
                            </NavLink>
                        </li>
                    ) : ""}
                    {user.role === "merchant" ? (
                        <li>
                            <NavLink to={Router.admin.product.home} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                                Product
                            </NavLink>
                        </li>
                    ) : ""}
                   {user.role === "user" ? (
                      <>
                        <li>
                            <NavLink to={Router.admin.orders['list-orders']} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                                Orders
                            </NavLink>
                        </li>
                            <li>
                            <NavLink to={Router.admin.orders['list-orders']} className="inline-block hover:bg-white hover:text-green-bonek-1 rounded w-full px-3 py-2 text-white font-semibold">
                                Create Merchant
                            </NavLink>
                        </li>
                      </>
                    ) : ""}
                    
                </ul>
            </div>
            <div className="py-8 flex items-center">
                <NavLink to={Router.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
                <button
                    onClick={() => {
                        Swal.fire({
                            title: 'Peringatan!',
                            text: 'Apakah anda logout ?',
                            icon: 'warning',
                            confirmButtonText: 'Yes',
                            showCancelButton: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                store.dispatch(logoutUser());
                            }
                        });
                    }}
                    className='bg-red-700 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;