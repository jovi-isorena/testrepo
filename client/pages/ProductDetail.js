import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

//components
import {ClipLoader} from 'react-spinners';

function ProductDetail(){

    const [ product, setProduct] = useState({});

    let { id } = useParams();

    useEffect(()=>{
        console.log(id);
        Axios.get(`http://localhost:3001/getProduct?id=${id}`).then(
            (response) => {
                console.log(response.data);
                if(response.data.name.includes("Error")){
                    console.log(response);
                    console.log(product);
                }else{
                    setProduct(response.data);

                }
            }
        );
    }, []);

    return <>
        { product ?         
(
    <>
        <h1>Product</h1>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
    </>
    )   :
            (
                <div className="loader-container mt-5">
                    <ClipLoader color={'#000'} size={75} />
                    
                </div>
            )
 
        }
    </>
}

export default ProductDetail;