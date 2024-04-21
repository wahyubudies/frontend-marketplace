import { CardProduct, Container, Headline } from '../../../components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Promo = () => {

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
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                        <SplideSlide className="p-4">
                            <CardProduct type="white" />
                        </SplideSlide>
                    </Splide>
                </div>
            </Container >
        </div >
    );
};

export default Promo;