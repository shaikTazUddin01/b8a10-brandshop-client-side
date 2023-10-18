import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrand] = useState([]);

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (
        <div className='my-20 max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#353535]'>Brands</h1>
                <div className='w-[5%] h-[3px] bg-[#353535] mx-auto mt-1'></div>
                <div className="grid grid-cols-3 gap-6 py-10">
                    {
                        brands?.map(brand => <BrandCard brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;