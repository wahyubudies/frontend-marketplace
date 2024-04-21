import { NavLink } from "react-router-dom";
import { Container } from "../components";

const MENU = [
    {
        to: "#",
        name: "Home"
    },
    {
        to: "#",
        name: "Promo"
    },
    {
        to: "#",
        name: "Baru"
    },
    {
        to: "#",
        name: "Kategori"
    },
];
const SOSMED = [
    {
        to: "#",
        name: "About Us"
    },
    {
        to: "#",
        name: "Contact Us"
    },
    {
        to: "#",
        name: "Instagram"
    },
    {
        to: "#",
        name: "Partners"
    },
];
const Footer = () => {
    const LOGO = "/img/logo.webp";
    return (
        <div className=' bg-gradient-to-r from-green-bonek-1 to-green-bonek-2 py-10'>
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <img src={LOGO} alt="" className="w-full max-w-[130px] mb-8" />
                    <p className="text-white font-normal text-justify">
                        Kami dengan bangga mempersembahkan kepada Anda ragam produk unik dan berkualitas dari UMKM Surabaya yang siap memikat hati Anda. Dari kuliner lezat hingga kerajinan tangan yang memukau, kami hadirkan segala sesuatu yang Anda butuhkan untuk memenuhi kebutuhan sehari-hari Anda dengan gaya yang tak tertandingi.
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    <ul className="w-full">
                        {MENU.map(({ to, name }, index) => (
                            <li key={index} className="text-end">
                                <NavLink to={to} className="text-white hover:text-slate-200 leading-8 text-2xl font-normal py-1 inline-block">
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul className="w-full">
                        {SOSMED.map(({ to, name }, index) => (
                            <li key={index} className="text-end">
                                <NavLink to={to} className="text-white hover:text-slate-200 leading-8 text-2xl font-normal py-1 inline-block">
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </Container>
            <Container>
                <div className="border-b-4 border-blue-bonek w-full my-8" />
                <p className="text-white font-semibold"> &copy; 2024</p>
            </Container>
        </div >
    );
};

export default Footer;