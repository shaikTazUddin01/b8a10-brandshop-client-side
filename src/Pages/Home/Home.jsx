import { useLoaderData } from 'react-router-dom';
import Brands from '../../Component/Home/Brands';
import MainBanner from '../../Component/Home/MainBanner';
import bg from '../../assets/img/bg/login-bg.jpg'

const Home = () => {

    return (
        <div className=''>
            <MainBanner></MainBanner>
            <Brands ></Brands>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl'>Follow Us</h1>
                <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover min-h-[300px] rounded-xl'>
                    <div className='bg-[#05050581] min-h-[300px]  rounded-xl '>
                        <div className='flex justify-center items-center h-[300px]'>
                            <input type="text" name="" id="" className='border' />
                            <button className='btn btn-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-20'>
               <div className='text-center'>
               <p className='text-2xl font-bold'>Have any queries?</p>
                <h1 className='text-4xl font-bold'>We're here to help.</h1>
                <div className='w-full mx-auto border text-center'>
                <div className='h-1 w-[15%] bg-slate-800' mx-auto></div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Home;