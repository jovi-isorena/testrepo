// import React, { useEffect } from "react";
// import { useState } from "react-dom";

import { Link } from 'react-router-dom';

function ProductDisplay({product}) {
    
    
    return (
       <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card' >
                <div className='card-header'>
                    <h3 className='card-title'>{product.name}</h3>
                </div>
                <div className='card-body'>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} </p>
                    <p>Rating: {product.rating}</p>
                    <img src={product.image === null ? '' : product.image } alt="product"/>
                    <p>Status: {product.status}</p>
                </div>
                <div className='card-footer'>
                    <Link to={`/product/${product._id}`} className='btn btn-primary w-50'>Buy</Link>
                    <button type="button" className='btn btn-secondary w-50'>Add to Cart</button>
                </div>
            </div>
        </div>
                    
    );
}

export default ProductDisplay;
