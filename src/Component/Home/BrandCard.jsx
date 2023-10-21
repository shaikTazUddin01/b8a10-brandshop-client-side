import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandCard = ({ brand }) => {
    const{darkTheme}=useContext(AuthContext)
    // const [product,setProduct]=useState([])
    // useEffect(()=>{
    //     const filter=loadProduct.filter(product=>product.name===brand.category_name);
    //     setProduct(filter);
    // },[])
    const brandName = brand?.brand_name;
    const brandNameUpperCase=brandName.toUpperCase();
    return (
        <div>
           <Link to={`/showProduct/${brand.brand_name}`}>
           <div className="card bg-base-100 shadow-lg shadow-[#353535] hover:shadow-xl hover:shadow-[#353535]">
                <figure className="">
                    <img src={brand?.image} alt="Shoes" className="rounded-t-xl h-[200px] md:h-[270px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="-mt-2 card-title text-[#1b1b1b] font-semibold" >{brandNameUpperCase}</h2>
                 {/* <h1>{loadProduct.length}</h1> */}
                </div>
            </div>
           </Link>
        </div>
    );
};

export default BrandCard;