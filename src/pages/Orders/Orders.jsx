import { useLoaderData } from 'react-router-dom';
import { GeneralUtility } from '../../utils';

const OrderPage = () => {
  const ordersResponse = useLoaderData();

  console.log(ordersResponse);
  return (
    <div>
        <h2>History Order</h2>
        <div className='gap-2 flex flex-col'>
        {
          ordersResponse.map(item => 

            <div key={item.id} className='bg-slate-50	p-4'>
                <p>{item.code}</p>
                <p>Status Pembayaran {item.status}</p>
                <p>{GeneralUtility.formatRupiah(item.totalPrice)}</p>
            </div>

          )
        }
        </div>
    </div>
  )
}

export default OrderPage