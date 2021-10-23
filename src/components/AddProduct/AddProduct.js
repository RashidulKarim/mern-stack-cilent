import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      axios.post("https://git.heroku.com/mern-stack-testing1.git/addProduct",{
          body: data
      }).then(res =>{
          if(res.data.insertedId){
              alert("Product added successfully")
          }else{
              alert("Something wrong. please try again later")
          }
      })
      reset();
    };
    return (
        <div className='flex'>
            <h2 style={{textAlign:"center", margin:"10px"}}>
                Add Product
            </h2>
            <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product name' {...register("name", { required: true })} />
                <input placeholder='product Price' {...register("price", { required: true })} />
                <input placeholder='product category' {...register("category", { required: true })} />
                  
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddProduct;