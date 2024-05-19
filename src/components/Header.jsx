import React, { useEffect, useState } from 'react';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import Router from "../route/router";
import { useSelector } from 'react-redux';

const Header = () => {
    const LOGO = "/img/logo.webp";
    const USER_ICON = "/img/white-user.webp";
    const WISTLIST_ICON = "/img/white-star.webp";
    const CART_ICON = "/img/white-bucket.webp";
    const OPEN_BARS = "/img/open-bars.png";
    const CLOSE_BARS = "/img/close-bars.png";
    const [openMenu, setOpenMenu] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const [urlProductName, setUrlProductName] = useState("");


    useEffect(() => {
        const urlParams = new URL(window.location.href);
        const urlProductName = urlParams.searchParams.get('name') || "";
        setUrlProductName(urlProductName);
    }, []);


    return (
        <div className='w-full bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 py-4'>
            <Container className="hidden lg:flex items-center justify-between">
                <NavLink to={Router.home}>
                    <img src={LOGO} alt="" className="w-full max-w-[120px]" />
                </NavLink>
                <ul className='flex gap-6 items-center'>
                    <li>
                        <NavLink to={Router.home} className="text-white font-bold leading-tight text-md hover:text-slate-200">Home</NavLink>
                    </li>
                    <li>
                        <a href={Router.catalog} className="text-white font-bold leading-tight text-md hover:text-slate-200">Produk</a>
                    </li>
                    <li>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const productName = urlProductName || e.currentTarget.search.value;

                            window.location.href = `/catalog?name=${productName}&type=&categoryId=`;
                        }} className="relative">
                            <input
                                className='border-0 outline-0 rounded-2xl py-2 pl-4 pr-9'
                                type="text"
                                value={urlProductName}
                                onChange={(e) => setUrlProductName(e.target.value)}
                                name="search"
                                placeholder="Cari produk ..." id="" />
                            <img src="/img/green-search.webp" className='w-4 h-4 object-contain absolute top-3 right-3 z-10' />
                        </form>
                    </li>
                    <li>
                        <NavLink to={Router.cart} className='hover:scale-105'>
                            <img src={CART_ICON} alt="" className='w-5 h-5 object-contain' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Router.wistlist} className='hover:scale-105'>
                            <img src={WISTLIST_ICON} alt="" className='w-5 h-5 object-contain' />
                        </NavLink>
                    </li>
                    <li>
                        {isLoggedIn ? (
                            <button onClick={() => window.location.href = Router.admin.home}
                                className={`bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl flex items-center`}>
                                <img src={USER_ICON} alt='' className='w-5 h-6 object-contain mr-2' /> Profile
                            </button>
                        ) : (
                            <NavLink to={Router.login} className={`bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl flex items-center`}>
                                <img src={USER_ICON} alt='' className='w-5 h-6 object-contain mr-2' /> Masuk
                            </NavLink>
                        )}
                    </li>
                </ul>
            </Container>

            <Container className="flex lg:hidden items-center justify-between">
                <NavLink to={Router.home}>
                    <img src={LOGO} alt="" className="w-full max-w-[120px]" />
                </NavLink>
                <button
                    onClick={() => setOpenMenu(true)}
                    className='bg-blue-bonek hover:bg-black p-2 rounded-xl w-[40px] h-[40px]'>
                    <img src={OPEN_BARS} alt="" className='w-full h-full object-contain' />
                </button>
                {openMenu ? (
                    <div className='fixed top-0 left-0 w-full h-dvh bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 z-50'>
                        <Container className="h-dvh flex-col justify-between flex">
                            <div className='py-4'>
                                <button
                                    onClick={() => setOpenMenu(false)}
                                    className='bg-blue-bonek hover:bg-black p-2 rounded-xl w-[40px] h-[40px] float-end'>
                                    <img src={CLOSE_BARS} alt="" className='w-full h-full object-contain' />
                                </button>
                            </div>
                            <div>
                                <ul className='flex gap-6 flex-col'>
                                    <li className='flex justify-center'>
                                        <NavLink to={Router.home} className="text-white font-bold leading-tight text-md hover:text-slate-200">Home</NavLink>
                                    </li>
                                    <li className='flex justify-center'>
                                        <NavLink to={Router.catalog} className="text-white font-bold leading-tight text-md hover:text-slate-200">Produk</NavLink>
                                    </li>
                                    <li className='flex justify-center'>
                                        <NavLink to={Router.cart} className='text-white font-bold leading-tight text-md hover:text-slate-200 flex items-center'>
                                            <img src={CART_ICON} alt="" className='w-5 h-5 object-contain mr-2' />
                                            Cart
                                        </NavLink>
                                    </li>
                                    <li className='flex justify-center'>
                                        <NavLink to={Router.wistlist} className='text-white font-bold leading-tight text-md hover:text-slate-200 flex items-center'>
                                            <img src={WISTLIST_ICON} alt="" className='w-5 h-5 object-contain mr-2' />
                                            Wistlist
                                        </NavLink>
                                    </li>
                                    <li>
                                        <div className="relative">
                                            <input
                                                className='w-full border-0 outline-0 rounded-2xl py-2 pl-4 pr-9'
                                                type="text"
                                                name="search"
                                                placeholder="Cari produk ..." id="" />
                                            <img src="/img/green-search.webp" className='w-4 h-4 object-contain absolute top-3 right-3 z-10' />
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to={Router.login} className='w-full justify-center bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl flex items-center'>
                                            <img src={USER_ICON} alt='' className='w-5 h-6 object-contain mr-2' />
                                            Masuk
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div></div>
                        </Container>
                    </div>
                ) : ""}
            </Container>
        </div >
    );
};

export default Header;