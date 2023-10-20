import React from 'react';

const Queries = () => {
    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <div className='text-center'>
                <p className='text-2xl font-bold'>Have any queries?</p>
                <h1 className='text-4xl font-bold mt-2'>We're here to help.</h1>
                <div className='w-full mx-auto flex justify-center mt-2'>
                    <div className='h-1 w-[15%] bg-slate-800' mx-auto></div>
                </div>
            </div>
            {/* card area */}
            <div className='grid grid-cols-4 gap-5 mt-10'>
                <div>
                    <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-bold">Sales</h2>
                            <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                                <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                            </div>
                            <p className='text-sm font-semibold'>If you have anything to know about product sales</p>
                            <div className="card-actions justify-end">
                                <p className='text-blue-700'>tazahmedsoft@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-bold">Complaints</h2>
                            <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                                <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                            </div>
                            <p className='text-sm font-semibold'>if you have any complaints about our products or company</p>
                            <div className="card-actions justify-end">
                                <p className='text-blue-700'>+880 1745 784525</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-bold">Returns</h2>
                            <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                                <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                            </div>
                            <p className='text-sm font-semibold'>Contact us if you need to return the product.</p>
                            <div className="card-actions justify-end">
                                <p className='text-blue-700'>tazahmedsoft@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-lg shadow-[#383838] hover:shadow-[#383838] text-center hover:shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-bold">Marketing</h2>
                            <div className='w-full mx-auto flex justify-center -mt-1 mb-2'>
                                <div className='h-[3px] w-[25%] bg-slate-600' mx-auto></div>
                            </div>
                            <p className='text-sm font-semibold'>If you want to know something marketing</p>
                            <div className="card-actions justify-end">
                                <p className='text-blue-700'>tazahmedsoft@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Queries;