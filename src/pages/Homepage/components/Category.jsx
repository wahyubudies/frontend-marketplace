import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container, Headline } from '../../../components';

const Category = ({ categories }) => {
    return (
        <div className='py-10 bg-green-bonek-2'>
            <Container>
                <Headline type="white" title="Kategori" />
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
                                    perPage: 5,
                                },
                            }
                        }} aria-label="Slider Promo">
                        {categories.map(({ icon }, index) => (
                            <SplideSlide className="p-4" key={index}>
                                <img src={icon} className='w-full h-full object-cover max-w-[200px] mx-auto' />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </Container>
        </div>
    );
};

export default Category;