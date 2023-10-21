import { useContext, useState } from 'react';
import About from '../../Component/Home/About';
import Brands from '../../Component/Home/Brands';
import Commited from '../../Component/Home/Commited';
import MainBanner from '../../Component/Home/MainBanner';
import Queries from '../../Component/Home/Queries';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
const {darkTheme}=useContext(AuthContext)
    return (
        <div className={darkTheme ? "bg-black text-white" : "bg-white"}>
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