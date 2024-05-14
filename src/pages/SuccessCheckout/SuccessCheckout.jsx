import { useNavigate } from 'react-router-dom';
import successIcon from '../../../public/img/success-checkout.png';
import Router from '../../route/router';

const SuccessCheckout = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img src={successIcon} alt="Success Icon" className="w-20 h-20 mb-4" />
      <h2 className="text-2xl font-bold mb-4">Checkout Successful</h2>
      <p className="text-gray-700 mb-8">Thank you for your order!</p>
      <button onClick={
        ()=> navigate(Router.home)
      }
      className="bg-blue-bonek text-white px-4 py-2 rounded hover:bg-black">
        Go to Homepage
      </button>
    </div>
  );
};

export default SuccessCheckout;