// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './MainBanner.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import 'swiper/css/scrollbar';
//import banner img
import iphone from '../../assets/img/banner/iphone.png'
// import iphoneBg from '../../assets/img/banner/iphone-bg.jpg'
import samsong from '../../assets/img/banner/samsong.png'
// import vivo from '../../assets/img/banner/vivo.png'
const MainBanner = () => {
    return (
        <div>
            <div className='hidden md:flex'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}
                    effect={'fade'}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => }
                // onSlideChange={() => }
                >
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center'
                    // style={{ backgroundImage: `url(${iphoneBg})` }}
                    >
                        <div className='grid md:grid-cols-3 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10 gap-10'>
                            <div className='md:col-span-1 md:space-y-10 mt-40 md:mt-0 text-center md:text-left'>
                                <h1 className='text-white text-5xl font-bold'>iPhone 15 pro</h1>
                                <p className='text-white text-xl font-semibold'>Titanium . So strong . So light . So Pro internal storage base variant of 8 GB Ram, 256 GB, 512 GB, 1 TB Internal Memory.
                                </p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px] -mt-40 md:mt-0 p-10 md:p-0'>
                                <img src={iphone} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:px-10 lg:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10'>
                            <div className='md:col-span-2 space-y-10'>
                                <h1 className='text-white text-5xl font-bold'>Galaxy Z Fold5</h1>
                                <p className='text-white text-xl font-semibold'>Meet the phone with a big screen like a mobile movie theater. The one that's both an exciting game console and a multi-screen, multitasking workhorse. And topped off with a powerful, pro-grade camera. All folded into your hands.</p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px]'>
                                <img src={samsong} alt="" className='w-[100%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:px-10 lg:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10'>
                            <div className='md:col-span-2 space-y-10'>
                                <h1 className='text-white text-5xl font-bold'>Walton Tick R1A</h1>
                                <p className='text-white text-xl font-semibold'>Walton Tick R1A Walton Tick R1A internal storage base variant of 192 KB Ram, 128 MB Internal Memory (ROM).</p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px]'>
                                <img src="https://i.ibb.co/X4ZS76N/Walton-Tick-WSWA-1-B-removebg-preview.png" alt="" className='w-[70%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:px-10 lg:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10'>
                            <div className='md:col-span-2 space-y-10'>
                                <h1 className='text-white text-5xl font-bold'>Sony Xperia 5 IV</h1>
                                <p className='text-white text-xl font-semibold'>Supports your viewing with a stand Sony quality and durability protects your Xperia 5 IV Designed to fit perfectly in your hand</p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px]'>
                                <img src="https://i.ibb.co/vV27wjy/download-removebg-preview.png" alt="" className='w-[95%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:px-10 lg:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10'>
                            <div className='md:col-span-2 space-y-10'>
                                <h1 className='text-white text-5xl font-bold'>Dual-QHD Curved Gaming Monitor</h1>
                                <p className='text-white text-xl font-semibold'>The latest sony Odyssey C49G95TSSW Gaming Monitor comes with 49'' 2k (5120 x 1440) LED Curved Display. This gaming monitor's display is featured with Max 240Hz Frame Rate</p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px]'>
                                <img src="https://i.ibb.co/9nSSWWw/12jy-FAs7lhap5o8-Qr-MCr-Zu7-Cbo-QG7-Zl-C5-O6-FBd-CD-removebg-preview.png" alt="" className='w-[85%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:px-10 lg:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center h-full max-w-7xl mx-auto md:px-10 lg:px-10'>
                            <div className='md:col-span-2 space-y-10'>
                                <h1 className='text-white text-5xl font-bold'>This Intel Core I9-11900k</h1>
                                <p className='text-white text-xl font-semibold'>This Intel Core I9-11900k Processor comes with Intel Iris Xe Graphics 32 graphics. This new 11th gen Rocket Lake microarchitecture </p>
                            </div>
                            <div className='md:col-span-2 flex justify-center items-center min-h-[500px]'>
                                <img src="https://i.ibb.co/HVS7Hzm/Intel-11th-Gen-Core-i9-11900-K-removebg-preview.png" alt="" className='w-[80%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

            <div className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full max-h-[500px] md:min-h-[550px] flex items-center justify-center md:hidden'
                    // style={{ backgroundImage: `url(${iphoneBg})` }}
                    >
                        <div className='flex flex-col p-5 gap-5 text-center mx-auto my-10'>
                            <div className=''>
                                <h1 className='text-white text-5xl font-bold'>iPhone 15 pro</h1>
                                <p className='text-white text-lg font-semibold mt-4 mb-5'>Titanium . So strong . So light . So Pro internal storage base variant of 8 GB Ram, 256 GB, 512 GB, 1 TB Internal Memory</p>
                            </div>
                            <div className=''>
                                <img src={iphone} alt="" />
                            </div>
                        </div>
                    </div>



        </div>
    );
};

export default MainBanner;

