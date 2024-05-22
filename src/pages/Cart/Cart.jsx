import { useLoaderData, useNavigate } from 'react-router-dom';
import { Container } from '../../components';
import { TableBody, TableFoot, TableHead } from './components';
import Router from '../../route/router';

const Cart = () => {
    const cart = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='py-10 bg-white'>
            <Container>
                {!cart.success ? (
                    <>
                        <p className='text-center w-fit mx-auto mb-4'>
                            Silakan login terlebih dahulu!
                        </p>
                        <button className='bg-green-bonek-1 text-white px-4 py-2 rounded mx-auto block' onClick={() => navigate(Router.login)}>login dulu</button>
                    </>
                ) : (
                    <table className='w-full border-collapse'>
                        <TableHead />
                        <TableBody items={cart.data.items} />
                        <TableFoot items={cart.data.items} totalPrice={cart.data.totalPrice} />
                    </table>
                )}
            </Container>
        </div>
    );
};

export default Cart;