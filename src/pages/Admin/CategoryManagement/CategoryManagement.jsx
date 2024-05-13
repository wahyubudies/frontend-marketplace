import { NavLink,useLoaderData } from 'react-router-dom';
import { Headline } from '../../../components';
import DataTable from 'react-data-table-component';
import Router from '../../../route/router';
import Swal from 'sweetalert2';
import Category from '../../../models/Category'

const CategoryManagement = () => {
    const categoryDataLoader = useLoaderData();

    const columns = [
        {
            name: 'Icon',
            selector: row => row.icon,
            cell: row => <img height="100px" width="100px" alt={row.icon} src={row.icon} style={{ objectFit: "cover", margin: "10px 0" }} />,
        },
        {
            name: 'Title',
            selector: row => row.name,
        },
        {
            name: 'Action',
            cell: (row) => (
                <>
                    <NavLink to={`/admin/category/edit/${row.id}`}  style={{ color: "blue", marginRight: "10px", fontWeight: "600" }}>Edit</NavLink>
                    <button
                       onClick={() => { 
                        Swal.fire({
                            title: 'Peringatan!',
                            text: 'Apakah anda ingin menghapus data ?',
                            icon: 'warning',
                            confirmButtonText: 'Yes',
                            showCancelButton: true
                        }).then(async (result) => { 
                            if (result.isConfirmed) {
                                await Category.deleteCategory(row.id);
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
                    data={categoryDataLoader}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                />
            </div>
        </>
    );
};

export default CategoryManagement;