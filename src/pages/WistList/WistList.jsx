import { useLoaderData, useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { TableBody, TableHead } from "./components";
import Router from "../../route/router";

const WistList = () => {
    const wishlist = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='py-10 bg-white'>
            <Container>
                {!wishlist.success ? (
                    <>
                        <p className='text-center w-fit mx-auto mb-4'>
                            Silakan login terlebih dahulu!
                        </p>
                        <button className='bg-green-bonek-1 text-white px-4 py-2 rounded mx-auto block' onClick={() => navigate(Router.login)}>login dulu</button>
                    </>
                ) : (
                    <table className='w-full border-collapse'>
                        <TableHead />
                        <TableBody items={wishlist.data}/>
                    </table>
                )}
            </Container>
        </div>
    );
};

export default WistList;