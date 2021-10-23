import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product, products, setProducts}) => {
    const {name, price, category, _id} = product;
    const handleDelete = (id) =>{
        const message = window.confirm("Are u want to delete?")        
        if(message){
            axios.delete(`https://git.heroku.com/mern-stack-testing1.git/product/${id}`)
        .then(res =>{
            if(res.data.deletedCount>0){
                alert("Deleted Successfully")
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            }
        })
        } 
    }
    return (
        <div className='product'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <small>Category: {category}</small> <br />
            <button style={{ marginTop:'15px'}} onClick={()=> handleDelete(_id)}>Delete</button> <button style={{marginLeft:"35px", marginTop:'15px'}}><Link to={`/update/${_id}`}>Update</Link></button>
        </div>
    );
};

export default Product;