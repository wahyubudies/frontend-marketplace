import { ScrollTopButton } from "../../components";
import {
    Banner,
    BestSeller,
    Category,
    NewProducts,
    Promo
} from "./components";

const Homepage = () => {
    return (
        <>
            <Banner />
            <NewProducts />
            <Promo />
            <Category />
            <BestSeller />
            <ScrollTopButton />
        </>
    );
};

export default Homepage;