import About from '../../Component/Home/About';
import Brands from '../../Component/Home/Brands';
import Commited from '../../Component/Home/Commited';
import MainBanner from '../../Component/Home/MainBanner';
import Queries from '../../Component/Home/Queries';

const Home = () => {

    return (
        <div className=''>
            <MainBanner></MainBanner>
            <Brands ></Brands>
            {/* committed area */}
            <Commited></Commited>
            {/* about section */}
            <About></About>
            {/* queries section */}
            <Queries></Queries>
        </div>
    );
};

export default Home;