import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowProductDetails = () => {
    const data=useLoaderData()
    return (
        <div>
            <h2>{data.name}</h2>
        </div>
    );
};

export default ShowProductDetails;