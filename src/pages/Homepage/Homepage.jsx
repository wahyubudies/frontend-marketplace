import { useLoaderData } from "react-router-dom";
import { ScrollTopButton } from "../../components";
import {
    Banner,
    BestSeller,
    Category,
    NewProducts,
    Promo
} from "./components";

const Homepage = () => {
    const {
        newProducts,
        promoProducts,
        bestSellerProducts,
        categories
    } = useLoaderData();

    return (
        <>
            <Banner />
            <NewProducts products={newProducts} />
            {/* <Promo products={promoProducts} /> */}
            <Category categories={categories} />
            <BestSeller products={bestSellerProducts} />
            <ScrollTopButton />
        </>
    );
};

export default Homepage;