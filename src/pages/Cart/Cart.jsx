import { useLoaderData } from 'react-router-dom';
import { Container } from '../../components';
import { TableBody, TableFoot, TableHead } from './components';

const Cart = () => {
    const {items, totalPrice} = useLoaderData();
    
    return (
        <div className='py-10 bg-white'>
            <Container>
                <table className='w-full border-collapse'>
                    <TableHead />
                    <TableBody items={items} />
                    <TableFoot items={items} totalPrice={totalPrice}/>
                </table>
            </Container>
        </div>
    );
};

export default Cart;