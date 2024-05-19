import React, { useState } from 'react';
import Action from "./Action";
import { Headline } from '../../../components';
import { NavLink, useNavigate } from 'react-router-dom';
import Router from '../../../route/router';

const CreateMerchant = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  return (
    <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
      <Headline type="blue" title="Jadi Merchant" />
      <form onSubmit={(e) => Action.onSubmit({ e, form, navigate })}>
        <div className='grid grid-cols-2 gap-4 w-full mt-8'>
          <div>
            <label htmlFor="merchant_name" className='inline-block laeding-tight font-semibold text-slate-500'>
              Nama Merchant
            </label>
            <input
              onChange={(e) => Action.onChangeField({ e, form, setForm })}
              id="merchant_name"
              name="merchant_name"
              type="text"
              className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
          </div>
          <div>
            <label htmlFor="phone_number" className='inline-block laeding-tight font-semibold text-slate-500'>
              No. Telp
            </label>
            <input
              onChange={(e) => Action.onChangeField({ e, form, setForm })}
              id="phone_number"
              name="phone_number"
              type="number"
              className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
          </div>
          <div>
            <label htmlFor="address" className='inline-block laeding-tight font-semibold text-slate-500'>
              Alamat
            </label>
            <input
              onChange={(e) => Action.onChangeField({ e, form, setForm })}
              id="address"
              name="address"
              type="text"
              className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2' />
          </div>
          <div>
            <label htmlFor="merchant_description" className='inline-block laeding-tight font-semibold text-slate-500'>
              Deskripsi
            </label>
            <input
              type="text"
              onChange={(e) => Action.onChangeField({ e, form, setForm })}
              id="merchant_description"
              className='w-full bg-[#f1f1f1] px-4 py-2 rounded mt-2'
              name="merchant_description" />
          </div>
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

export default CreateMerchant;