import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderProduct from './OrderProduct';

const MyCart = () => {
    const myOrders=useLoaderData()
    return (
        <div className='min-h-screen max-w-7xl mx-auto'>
            <div className='grid grid-cols-2 gap-4 my-20'>
            {
                myOrders?.map(order=><OrderProduct order={order}></OrderProduct>)
            }
        </div>
        </div>
    );
};

export default MyCart;