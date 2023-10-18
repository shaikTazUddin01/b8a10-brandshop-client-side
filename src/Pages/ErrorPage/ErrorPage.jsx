import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto mt-40'>
            <h1 className='text-center text-3xl font-bold'>404</h1>
            <h2 className='text-center text-4xl font-bold'>Page Not Found.!</h2>
            <div className='text-center mt-4'>
            <Link to={'/'} className='gap-2 flex justify-center items-center  bg-[#383838] text-white py-2 
            px-4 rounded-lg max-w-[200px] mx-auto'>
                 <AiOutlineArrowLeft ></AiOutlineArrowLeft>
                <button className='font-semibold text-lg'>Go Back Home</button>
                </Link>

            </div>
               
        </div>
    );
};

export default ErrorPage;