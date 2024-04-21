import { NavLink } from 'react-router-dom';
import Router from '../../route/router';

const NotFound = () => {
    return (
        <>
            <div className='text-center mt-8 mb-4 font-bold text-slate-700 text-xl'>Halaman Tidak Ditemukan - 404</div>
            <NavLink to={Router.home} className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mx-auto block w-fit'>
                Kembali
            </NavLink>
        </>
    );
};

export default NotFound;