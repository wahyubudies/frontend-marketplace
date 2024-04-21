import { NavLink } from 'react-router-dom';
import { Headline } from '../../../components';
import DataTable from 'react-data-table-component';
import Router from '../../../route/router';
import { useState } from 'react';
import Swal from 'sweetalert2';

const data = [
    {
        id: 1,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Beetlejuice'
    },
    {
        id: 2,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Ghostbusters'
    },
    {
        id: 3,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Shawshank Redemption'
    },
    {
        id: 4,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Godfather'
    },
    {
        id: 5,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Dark Knight'
    },
    {
        id: 6,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Pulp Fiction'
    },
    {
        id: 7,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Schindler\'s List'
    },
    {
        id: 8,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Forrest Gump'
    },
    {
        id: 9,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Lord of the Rings: The Return of the King'
    },
    {
        id: 10,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Fight Club'
    },
    {
        id: 11,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Inception'
    },
    {
        id: 12,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Matrix'
    },
    {
        id: 13,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Silence of the Lambs'
    },
    {
        id: 14,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Jurassic Park'
    },
    {
        id: 15,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Titanic'
    },
    {
        id: 16,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Avengers'
    },
    {
        id: 17,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Avatar'
    },
    {
        id: 18,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'The Lion King'
    },
    {
        id: 19,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Braveheart'
    },
    {
        id: 20,
        image: "https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg",
        title: 'Gladiator'
    },
];

const CategoryManagement = () => {

    const columns = [
        {
            name: 'Image',
            selector: row => row.image,
            cell: row => <img height="100px" width="100px" alt={row.image} src={row.image} style={{ objectFit: "cover", margin: "10px 0" }} />,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Action',
            cell: () => (
                <>
                    <NavLink to="/admin/category/edit/1" style={{ color: "blue", marginRight: "10px", fontWeight: "600" }}>Edit</NavLink>
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
                </>
            )
        },
    ];
    return (
        <>
            <NavLink to={Router.admin.category.add} className='bg-green-bonek-1 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mb-4 inline-block'>
                Tambah
            </NavLink>
            <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
                <Headline type="blue" title="Kategori" />
                <DataTable
                    pagination
                    columns={columns}
                    data={data}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                />
            </div>
        </>
    );
};

export default CategoryManagement;