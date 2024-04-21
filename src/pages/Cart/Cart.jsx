import { Container } from '../../components';
import { TableBody, TableFoot, TableHead } from './components';

const Cart = () => {
    return (
        <div className='py-10 bg-white'>
            <Container>
                <table className='w-full border-collapse'>
                    <TableHead />
                    <TableBody />
                    <TableFoot />
                </table>
            </Container>
        </div>
    );
};

export default Cart;