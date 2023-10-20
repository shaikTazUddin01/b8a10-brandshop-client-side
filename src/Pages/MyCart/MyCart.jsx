import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderProduct from './OrderProduct';

const MyCart = () => {
    const myOrders=useLoaderData()
    const [orders,setOrder]=useState(myOrders)
    return (
        <div className=''>
            <div className='min-h-screen max-w-7xl mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-20 px-5 lg:px-0'>
            {
                orders?.map(order=><OrderProduct key={order?._id} order={order} setOrder={setOrder} orders={orders}></OrderProduct>)
            }
        </div>
        </div>
        </div>
    );
};

export default MyCart;