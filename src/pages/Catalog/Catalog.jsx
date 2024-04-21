import { CardProduct, Headline, ScrollTopButton } from '../../components';
import { CategoryFilter, TypeFilter } from './components';
import { useState } from 'react';

const Catalog = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const OPEN_BARS = "/img/open-bars.png";
    const CLOSE_BARS = "/img/close-bars.png";
    return (
        <>
            <div className='flex'>
                {/* Menu Toggle */}
                {!showSidebar && (
                    <button
                        onClick={() => setShowSidebar(true)}
                        className='fixed bottom-4 right-16 bg-blue-bonek hover:bg-black text-white font-bold p-2 rounded-xl z-10 w-[40px] h-[40px]'>
                        <img src={OPEN_BARS} alt="" className='w-full h-full object-contain' />
                    </button>
                )}
                {/* END: Menu Toggle */}
                {showSidebar && (
                    <div className='fixed top-0 left-0 lg:relative z-20 w-full max-w-[250px] h-screen p-6 bg-green-bonek-1 overflow-y-auto'>
                        <button
                            onClick={() => setShowSidebar(false)}
                            className='block bg-blue-bonek hover:bg-black text-white font-bold p-2 rounded-xl z-10 w-[40px] h-[40px] mb-4'>
                            <img src={CLOSE_BARS} alt="" className='w-full h-full object-contain' />
                        </button>
                        <div className="py-4">
                            <TypeFilter />
                        </div>
                        <div className='py-4'>
                            <CategoryFilter />
                        </div>
                    </div>
                )}
                <div className='flex-grow h-screen bg-white p-6 overflow-auto'>
                    <Headline type="blue" title="Semua Kategori" />
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                        <CardProduct type="green" />
                    </div>
                    <button className='bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mx-auto block'>
                        Lihat Lebih Banyak
                    </button>
                </div>
            </div>
            <ScrollTopButton />
        </>
    );
};


export default Catalog;