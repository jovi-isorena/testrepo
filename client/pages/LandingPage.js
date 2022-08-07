import React, { useState, useEffect } from "react";
import Axios from "axios";

//components
import {ClipLoader} from 'react-spinners' ;

//pages
import ProductDisplay from '../components/ProductDisplay';

function LandingPage() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getProducts").then(
            (response) => {
                setProductList(response.data);
            }
        );
    },[]);
    
    return <>
        <div className="App">

            <h1>Product List</h1>

            { productList ? 
            (
                <div className='productList'>
                    <div className='row p-3'>
                        { productList.map((product) => {
                            return <ProductDisplay product={product} key={product._id}/>
                        }) }
                        
                    </div>
                </div>

            ) :
            (
                <div className="loader-container mt-5">
                    <ClipLoader color={'#000'} size={75} />
                </div>
            )}
            </div>
    
    </>
}

export default LandingPage;