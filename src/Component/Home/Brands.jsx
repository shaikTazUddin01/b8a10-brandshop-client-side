import { useContext, useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { AuthContext } from "../../Provider/AuthProvider";

const Brands = () => {
    const{darkTheme}=useContext(AuthContext)

    const [brands, setBrand] = useState([]);

    // console.log(darkTheme)

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (
        <div >
            <div className='my-20 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold '>Brands</h1>
                <div className={darkTheme ? "bg-[#ffffff] w-[5%] h-[3px] mx-auto mt-1" : 
                "bg-[#353535] w-[5%] h-[3px] mx-auto mt-1"}></div>
                {/* <div className='w-[5%] h-[3px] bg-[#353535] mx-auto mt-1'></div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-5 lg:px-0">
                    {
                        brands?.map(brand => <BrandCard key={brand.id} brand={brand} ></BrandCard>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Brands;