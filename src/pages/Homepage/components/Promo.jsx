import { CardProduct, Container, Headline } from '../../../components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Promo = ({ products }) => {

    return (
        <div className='py-10 bg-green-bonek-1'>
            <Container>
                <Headline type="white" title="Promo" />
                <div className='py-10'>
                    <Splide
                        options={{
                            type: "loop",
                            rewind: true,
                            perPage: 2,
                            perMove: 1,
                            pagination: false,
                            arrows: false,
                            mediaQuery: 'min',
                            breakpoints: {
                                1024: {
                                    perPage: 4,
                                },
                            }
                        }} aria-label="Slider Promo">
                        {products.map((product, index) => (
                            <SplideSlide className="p-4" key={index}>
                                <CardProduct type="white" item={product} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </Container >
        </div >
    );
};

export default Promo;