import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ShowProductDetails = () => {
    const data = useLoaderData()
    const {name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription }=data;
    const handleOrder=()=>{
        const product={name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription }
        fetch('http://localhost:5000/order',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                toast.success("SuccessFully you added this order")
            }
        })
    }

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
                       
                        <button className='btn btn-success' onClick={handleOrder}>Add Cart</button>
                        
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ShowProductDetails;