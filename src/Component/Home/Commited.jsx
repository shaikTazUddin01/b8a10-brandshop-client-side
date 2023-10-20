
import best from '../../assets/img/logo/best.png'
import service from '../../assets/img/logo/service.png'
import value from '../../assets/img/logo/value.png'

const Commited = () => {
    return (
        <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold pb-2 text-center' >We are committed</h1>
        <div className='w-full mx-auto flex justify-center mt-2'>
            <div className='h-1 w-[15%] bg-slate-800' mx-auto></div>
        </div>

        {/* card area */}
        <div className='grid grid-cols-3 gap-5 mt-10'>
            <div>
                <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                    <div className="card-body text-center">
                        <div className='flex justify-center items-center'>
                            <img src={best} alt="" className='w-[30%] only:' />
                        </div>
                        <h2 className="text-center text-3xl font-bold">Best Quality</h2>
                        <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                            <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                        </div>
                        <p className='text-sm font-semibold'>Build the best products and become the world's most respected company in providing the highest quality security and surveillance products with the latest digital technology techniques and expertise.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                    <div className="card-body text-center">
                        <div className='flex justify-center items-center'>
                            <img src={service} alt="" className='w-[30%] only:' />
                        </div>
                        <h2 className="text-center text-3xl font-bold">Best Services</h2>
                        <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                            <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                        </div>
                        <p className='text-sm font-semibold'>We provide Innovating digital products for a safer world aim to be a leading company and achieve sustainable growth and an eternal sense of loyalty towards our products and best services.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                    <div className="card-body text-center">
                        <div className='flex justify-center items-center'>
                            <img src={value} alt="" className='w-[30%] only:' />
                        </div>
                        <h2 className="text-center text-3xl font-bold">Core Values</h2>
                        <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                            <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                        </div>
                        <p className='text-sm font-semibold'>We provide quality security services to keep our customers safe by providing innovative digital technologies. Our motto is 'Customer comes first' continuously committed to serving our customers.</p>
                    </div>
                </div>
            </div>

            <div>
            </div>


        </div>

    </div>
    );
};

export default Commited;