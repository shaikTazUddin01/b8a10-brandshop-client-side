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
            <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full min-h-[550px] flex items-center justify-center'
            // style={{ backgroundImage: `url(${iphoneBg})` }}
            >
                <div className='grid grid-cols-3 justify-between items-center h-full max-w-6xl mx-auto'>
                    <div className='col-span-1 space-y-10'>
                        <h1 className='text-white text-5xl font-bold'>iPhone 15 pro</h1>
                        <p className='text-white text-xl font-semibold'>Titanium . So strong . So light . So Pro</p>
                    </div>
                    <div className='col-span-2 flex justify-center items-center min-h-[500px]'>
                        <img src={iphone} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full min-h-[550px] flex items-center justify-center'>
                <div className='grid grid-cols-4 justify-between items-center h-full max-w-6xl mx-auto'>
                    <div className='col-span-2 space-y-10'>
                        <h1 className='text-white text-5xl font-bold'>Galaxy Z Fold5</h1>
                        <p className='text-white text-xl font-semibold'>Meet the phone with a big screen like a mobile movie theater. The one that's both an exciting game console and a multi-screen, multitasking workhorse. And topped off with a powerful, pro-grade camera. All folded into your hands.</p>
                    </div>
                    <div className='col-span-2 flex justify-center items-center min-h-[500px]'>
                        <img src={samsong} alt=""  className='w-[100%]'/>
                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide className='bg-gradient-to-r from-[#353535] to-[#000000] max-w-full min-h-[550px] flex items-center justify-center'>
            <div className='grid grid-cols-3 justify-between items-center h-full max-w-6xl mx-auto'>
                    <div className='col-span-1 space-y-10'>
                        <h1 className='text-white text-5xl font-bold'>V29</h1>
                        <p className='text-white text-xl font-semibold'>Stdio  Portrait, lgnite the Aura</p>
                    </div>
                    <div className='col-span-2 flex justify-center items-center min-h-[500px]'>
                        <img src={vivo} alt=""  className=' h-[100%]'/>
                    </div>
                </div>


            </SwiperSlide> */}
            {/* <SwiperSlide className='min-h-[550px] bg-slate-600'>Slide 4</SwiperSlide>
            <SwiperSlide className='min-h-[550px] bg-purple-700'>Slide 4</SwiperSlide>
            <SwiperSlide className='min-h-[550px] bg-blue-500'>Slide 4</SwiperSlide> */}
        </Swiper>
    );
};

export default MainBanner;