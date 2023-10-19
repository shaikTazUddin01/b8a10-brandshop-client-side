import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowProductDetails = () => {
    const data = useLoaderData()
    const {name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription }=data;
    return (
        <div className='my-20 max-w-6xl mx-auto'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/mSYjxbc/minsk-belarus-april-samsung-logo-south-korean-multinational-electronics-company-minsk-belarus-april.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {name}
                    
                    </h2>
                    <p>{ShowProductDetails}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProductDetails;