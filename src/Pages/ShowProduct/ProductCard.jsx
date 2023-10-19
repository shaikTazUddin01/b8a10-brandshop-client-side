import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const { _id, name, brandName, typeOfProduct, price, rating,imageUrl } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-10 h-[250px]">
                    <img src={imageUrl?imageUrl:""} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <h2 className="card-title uppercase text-[#1f1f1f]">{name}</h2>
                        <h2 className="card-title uppercase text-[#555554]">{brandName}</h2>
                    </div>
                    <h2 className="card-title text-[#747474] font-semibold  text-[19px]">Type :
                     <span className='text-[17px]'>{typeOfProduct}</span>
                     </h2>
                    <div className='flex justify-between'>
                        <h5 className='card-title text-[#1f1f1f] font-semibold  text-[19px]'>Price :
                        <span className='text-[17px] text-[#2d2d2d]'>${price}</span>
                         </h5>
                        <h5>{rating}</h5>
                    </div>
                    <div className="card-actions flex justify-between">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="bg-[#173a68] text-white 
                            py-2 px-3 rounded-md">Show Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="bg-[#156b21] text-white
                            py-2 px-3 rounded-md
                            ">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;