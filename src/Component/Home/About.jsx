import bannerImg from'../../assets/img/bg/a.jpg'

const About = () => {
    return (
        <div>
                <div className='text-center my-20' >
                    <h1 className='text-4xl font-bold pb-2' >About Us</h1>
                    <div className='w-full mx-auto flex justify-center mt-2'>
                        <div className='h-[3px] w-[15%] md:w-[8%] bg-slate-800' mx-auto></div>
                    </div>
                    <div className='bg-cover mt-10 ' style={{backgroundImage:`url(${bannerImg})`}}>
            <div className='bg-[#242424b7] min-h-[300px] grid items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-between my-10'>
                    <div className=''>
                        <h1 className='text-white font-bold text-3xl'>200+</h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#ffffff] my-1'></div>
                        <h2 className='text-white font-bold text-3xl'>Daily Sales</h2>
                    </div>
                    <div className=''>
                    <h1 className='text-white font-bold text-3xl'>500+</h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#ffffff] my-1'></div>
                        <h2 className='text-white font-bold text-3xl'>Brand Product</h2>
                    </div>
                    <div className=''>
                    <h1 className='text-white font-bold text-3xl'>1000+</h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#ffffff] my-1'></div>
                        <h2 className='text-white font-bold text-3xl'>Active Customer</h2>
                    </div>
                </div>
            </div >

        </div>
                </div>
            </div>
    );
};

export default About;