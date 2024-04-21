import { Container } from "../../components";
import { TableBody, TableHead } from "./components";

const WistList = () => {
    return (
        <div className='py-10 bg-white'>
            <Container>
                <table className='w-full border-collapse'>
                    <TableHead />
                    <TableBody />
                </table>
            </Container>
        </div>
    );
};

export default WistList;