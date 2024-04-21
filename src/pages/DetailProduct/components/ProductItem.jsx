import { Container, QtyButton } from '../../../components';
import { ThumbnailItem } from "./index";

const ProductItem = () => {
    return (
        <div className='py-10 bg-white'>
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <ThumbnailItem />
                </div>
                <div className='grid gap-4'>
                    <div className="flex w-full justify-between items-center">
                        <h1 className='font-bold text-green-bonek-1 text-3xl leading-tight'>
                            White T-Shirt
                        </h1>
                        <p className='text-slate-700 font-bold'>
                            Stock : 56
                        </p>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className='font-bold text-blue-bonek text-3xl leading-tight'>
                            Rp100,000
                        </h1>
                        <p className='text-slate-700 font-bold'>
                            Berat Produk : 1000 gram
                        </p>
                    </div>
                    <p className="text-slate-700 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga voluptatibus ipsa? Ad, iusto saepe ducimus molestias maiores totam quae labore magnam, repellat suscipit atque hic rem error minima necessitatibus.
                    </p>
                    <div className="grid gap-1">
                        <p className='text-slate-700 font-bold'>
                            Toko : xxxx
                        </p>
                        <p className='text-slate-700 font-bold'>
                            Kontak : 0898989898
                        </p>
                        <p className='text-slate-700 font-bold'>
                            Alamat : Jl. Gubeng 200 Surabaya
                        </p>
                    </div>
                    <div className='flex items-stretch'>
                        <QtyButton className="mr-4" />
                        <button className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl'>
                            Tambahkan ke cart
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductItem;