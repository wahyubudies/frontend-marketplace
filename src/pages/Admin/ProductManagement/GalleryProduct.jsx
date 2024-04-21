import React from 'react';
import DataTable from 'react-data-table-component';
import { Headline } from '../../../components';
import { NavLink } from 'react-router-dom';
import Router from '../../../route/router';
import Swal from 'sweetalert2';

const data = [
    {
        id: 1,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg"
    },
    {
        id: 2,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg"
    },
    {
        id: 3,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg"
    }
];

const GalleryProduct = () => {
    const columns = [
        {
            name: 'Image',
            selector: row => row.image,
            cell: row => <img height="100px" width="100px" alt={row.image} src={row.image} style={{ objectFit: "cover", margin: "10px 0" }} />,
        },
        {
            name: 'Action',
            cell: () => (
                <button
                    onClick={() => {
                        Swal.fire({
                            title: 'Peringatan!',
                            text: 'Apakah anda ingin menghapus data ?',
                            icon: 'warning',
                            confirmButtonText: 'Yes',
                            showCancelButton: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire("OK!");
                            }
                        });
                    }}
                    style={{ color: "red", fontWeight: "600" }}>Delete</button>
            )
        },
    ];

    return (
        <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
            <Headline type="blue" title="Gallery" />
            <DataTable
                pagination
                columns={columns}
                data={data}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            />
            <div className="flex items-center">
                <NavLink to={Router.admin.product.home} className='bg-slate-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mr-3'>
                    Kembali
                </NavLink>
            </div>
        </div>
    );
};

export default GalleryProduct;