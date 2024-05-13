import { useState } from 'react';
import { CardProduct, Container, Headline } from '../../../components';
import Action from '../Action';

const BestSeller = ({ products }) => {
    const [items, setItems] = useState(products);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(products.length);

    const loadMoreProducts = async () => {
        if (total > page) {
            const newProducts = await Action.getMoreNewProducts({
                offset: page + 1,
                limit: 8,
            });

            setItems([...items, ...newProducts.data.products]);
            setPage(page + 1);
            setTotal(newProducts.data.page.totalData);
        }
    };

    return (
        <div className="py-10">
            <Container>
                <Headline type="blue" title="Terlaris" />
                <div className="py-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {items.map((item, index) => (
                            <CardProduct key={index} type="green" item={item} />
                        ))}
                    </div>
                    {total > page && (
                        <button onClick={loadMoreProducts} className="bg-blue-bonek hover:bg-black text-white font-bold py-2 px-4 rounded-2xl mx-auto block">
                            Lihat Lebih Banyak
                        </button>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default BestSeller;
