import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { Headline } from '../../../components';
import DataTable from 'react-data-table-component';
import Router from '../../../route/router';
import Swal from 'sweetalert2';
import DetailItem from './components/DetailItem';
import Action from './Action';



const ProductManagement = () => {
    const productDataLoader = useLoaderData();
    const navigate = useNavigate();

    const columns = [
        {
            name: 'Gambar',
            selector: row => row.image,
            cell: row => <img height="100px" width="100px" alt={row.image} src={row.image} style={{ objectFit: "cover", margin: "10px 0" }} />,
        },
        {
            name: 'Produk',
            selector: row => row.name,
        },
        {
            name: 'Harga',
            selector: row => row.price,
        },
        {
            name: 'Stock',
            selector: row => row.stock,
        },
        {
            name: 'Action',
            cell: (row) => (
                <>
                    <NavLink to={`/admin/product/${row.id}/gallery`} style={{ color: "green", marginRight: "10px", fontWeight: "600" }}>Gallery</NavLink>
                    <NavLink to={`/admin/product/edit/${row.id}`} style={{ color: "blue", marginRight: "10px", fontWeight: "600" }}>Edit</NavLink>
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
                                    const idProduct = row.id;
                                    Action.onDeleteById(idProduct, navigate);
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
            <NavLink to={Router.admin.product.add} className='bg-green-bonek-1 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mb-4 inline-block'>
                Tambah
            </NavLink>
            <div className="bg-white p-8 rounded-2xl w-full max-w-[1024px]">
                <Headline type="blue" title="Produk" />
                <DataTable
                    pagination
                    columns={columns}
                    data={productDataLoader}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    expandableRows
                    expandableRowsComponent={DetailItem}
                />
            </div>
        </>
    );
};

export default ProductManagement;