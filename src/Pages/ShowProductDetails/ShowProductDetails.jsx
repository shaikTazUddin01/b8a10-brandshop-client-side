import React from 'react';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ShowProductDetails = () => {
    const data = useLoaderData()
    const { name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription } = data;
    const handleOrder = () => {
        const product = { name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription }
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("SuccessFully you added this order")
                }
            })
    }

    return (
        <div className='md:my-20 max-w-6xl mx-auto'>
            <div className="card bg-base-100 shadow-xl">
                <figure className='border shadow-lg'><img src={imageUrl ? imageUrl : ""} alt={name} className='max-h-[500px]' /></figure>
                <div className="card-body md:px-20">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title text-4xl font-bold">
                                {name}
                            </h2>
                            <h2 className="card-title text-2xl font-semibold text-[#494949] uppercase">
                                {brandName}
                            </h2>
                        </div>
                        <div>
                            <h2 className="card-title text-2xl font-bold text-[#494949]">
                                <span className=''>${price}</span>
                            </h2>
                            <p>
                                <Rating
                                    emptySymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="#ff6600"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    initialRating={rating}
                                    readonly
                                />
                            </p>
                        </div>
                    </div>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end mx-auto md:mx-0">

                        <button className='text-white py-3 rounded-lg
                         text-lg font-bold bg-[#383838] px-4' onClick={handleOrder}>Add to Cart</button>

                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ShowProductDetails;