import { useLoaderData } from 'react-router-dom';
import Brands from '../../Component/Home/Brands';
import MainBanner from '../../Component/Home/MainBanner';

const Home = () => {
    
    return (
        <div className=''>
           <MainBanner></MainBanner>
           <Brands ></Brands>
        </div>
    );
};

export default Home;