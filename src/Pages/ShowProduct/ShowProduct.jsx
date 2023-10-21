import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ShowProduct = () => {
    const brandItems = useLoaderData()
    // console.log(brandItems)
    const { darkTheme } = useContext(AuthContext)
    const brand = useParams()
    const brandName = brand.brand;

    console.log(brandName)

    const [adItem, setAdItem] = useState([])
    // const[a,c]=useState([])



    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('/add.json');
            const data = await res.json();
            setAdItem(data);
        }

        fetchData()

        fetch('/add.json')
            .then(res => res.json())
            .then(data => setAdItem(data))

    }, [])
    console.log(adItem)

    const ads = adItem.filter(item => item.brand == `${brandName}`);

    console.log(ads)
    // console.log(adItem)
    // console.log(brandName)
    // console.log(a)
    // console.log(expectedAd)
    return (
        // <div className="min-h-[89vh]">
        <div className={!darkTheme ? "bg-[#ffffff] min-h-[89vh] text-black " :
            "bg-[#000000] min-h-[89vh] text-white "}>
            {/* </div> */}
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    effect={'fade'}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {
                       ads.length && ads?.map((ad, index) => (
                            <SwiperSlide key={index} className='bg-gradient-to-b from-[#363636] to-[#000000] max-w-full
                             min-h-[400px] flex items-center justify-center shadow-2xl shadow-white  p-10 '>
                                <div className="flex flex-col md:flex-row justify-between items-center h-[600px]
                                 md:h-auto ">
                                    <div className="w-full md:w-1/2 px-5 text-center">
                                        <h1 className="text-white  text-2xl font-semibold mb-2">{ad.title}</h1>
                                        {/* <button className="bg-[#454546] text-white px-3 py-2 rounded-md mt-2 border">Buy Now</button> */}
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center items-center">
                                        <img src={ad.img} alt="" className="max-h-[300px]" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>




            {
             brandItems?.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 pb-20 max-w-6xl mx-auto px-5 lg:px-0">
                        {
                            brandItems?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                        }
                    </div>
                    :
                    <div className="text-center min-h-[90vh] flex items-center flex-col justify-center">
                        <h1 className="text-3xl ">No Product Added..!</h1>
                        <h1 className="text-4xl ">Please Add Some product</h1>
                        <Link to={'/addProduct'} className="flex justify-center">
                            <button className="bg-[#383838] py-2 px-3 text-white 
                        rounded-md mt-2 flex justify-center items-center gap-2">
                                Add Product
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default ShowProduct;