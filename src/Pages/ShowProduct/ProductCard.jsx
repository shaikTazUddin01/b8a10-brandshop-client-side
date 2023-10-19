import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const {_id, name, brandName, typeOfProduct, price, rating } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-10">
                    <img src="https://i.ibb.co/0MbGJ56/applelogo.webp" alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{brandName}</h2>
                    </div>
                    <h2 className="card-title">{typeOfProduct}</h2>
                    <div className='flex justify-between'>
                        <h5>Price:{price}</h5>
                        <h5>{rating}</h5>
                    </div>
                    <div className="card-actions flex justify-between">
                        <Link to={`/productDetails/${_id}`}>
                        <button className="btn btn-primary">Show Details</button>
                        </Link>
                        <button className="btn btn-primary">update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;