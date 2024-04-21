import { NavLink } from "react-router-dom";
import { Headline } from "../../../components";
import Router from "../../../route/router";

const EditCategory = () => {
    return (
        <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
            <Headline type="blue" title="Edit Kategori" />
            <div className='grid grid-cols-2 gap-4 w-full mt-8'>
                <div>
                    <label htmlFor="name" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Nama Kategori
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
                </div>
                <div>
                    <label htmlFor="iconCategory" className='inline-block laeding-tight font-semibold text-slate-500'>
                        Gambar Category
                    </label>
                    <input
                        id="iconCategory"
                        name="iconCategory"
                        type="file"
                        className='w-full bg-[#f1f1f1] px-4 py-1.5 rounded mt-2' />
                </div>
            </div>
            <div className="flex items-center mt-6">
                <NavLink to={Router.admin.category.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
                <button className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditCategory;