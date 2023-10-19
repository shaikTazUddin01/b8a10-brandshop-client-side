import React from 'react';

const OrderProduct = ({order}) => {
    const{name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription}=order
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src='https://i.ibb.co/z2L1s8V/download.png' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;