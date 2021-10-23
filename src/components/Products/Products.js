import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css';

const Products = () => {
const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://git.heroku.com/mern-stack-testing1.git/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className='products'>
            {
                products.map(product=> <Product products={products} setProducts ={setProducts} key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;