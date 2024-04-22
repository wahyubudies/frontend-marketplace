import { NavLink,useLoaderData,useParams,useNavigate } from "react-router-dom";
import { Headline } from "../../../components";
import Router from "../../../route/router";
import  Action from './Action'
import {useState,useEffect} from 'react'
 
const EditCategory = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [removeFile,setRemoveFile] = useState(false);

    const [detail,setDetail] = useState({
        id: id,
        name: '',
        icon: null
    });
    const [form,setForm] = useState({
        id: id,
        name: '',
        icon: null
    })
   
   useEffect(()=>{
    Action.getDetailCategory({ id, setDetail});
    setForm({
        id: id,
        name: detail.name,
        icon: ''
    })
   },[detail.name])
   
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
                        onChange={(e) => Action.onChangeField({ e, form, setForm })}
                        className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2'
                        defaultValue={form.name}
                        />
                </div>
                <div>
                    <label htmlFor="iconCategory" className='inline-block laeding-tight font-semibold text-slate-500'>
                    Gambar Category
                    </label>
                    {detail !== null && !removeFile ?
                        <div className="flex justify-center items-center">
                         <img src={detail.icon || ''} alt={detail.name || ''} />
                        <img  className="cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/9790/9790368.png" onClick={() => setRemoveFile(true)} alt="delete" width="20px" />
                        </div>
                    :
                    <input
                    id="iconCategory"
                    name="iconCategory"
                    onChange={(e) => Action.onChangeFile({ e, form, setForm })}
                    type="file"
                    className='w-full bg-[#f1f1f1] px-4 py-1.5 rounded mt-2' />    
                }
                </div>
            </div>
            <div className="flex items-center mt-6">
                <NavLink to={Router.admin.category.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
                <button 
                onClick={(e) => Action.onUpdate({ e,form,navigate  })}
                className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditCategory;