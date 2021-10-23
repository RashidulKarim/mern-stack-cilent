import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const Update = () => {
    const [product, setProduct] = useState({})
    const { register, handleSubmit, setValue  } = useForm({
            defaultValues: {
                name: "bill",
                price: "luo",
                category: "test@test.com"
              }
      });
    const {id} = useParams()
      useEffect(()=>{
        setValue("name", product.name)
        setValue("price", product.price)
        setValue("category", product.category)
      },[product])

    const onSubmit = data => {
        axios.put(`https://git.heroku.com/mern-stack-testing1.git/updateInfo/${id}`,{
            body: data
        }).then(res =>{
            if(res.data.modifiedCount>0){
                alert("Your change is saved successfully.")
                window.location.reload()
            }
            else{alert("something wrong. please try again later")}
        })                
      };

    useEffect(()=>{
        fetch(`https://git.heroku.com/mern-stack-testing1.git/update/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data)
        )
    }, [id])    
    
    return (
        <div className='flex'>
            <h3 style={{textAlign:'center', margin:'20px'}}>Update info of {product.name}</h3>
            <p style={{textAlign:'center'}}>Want to update? please fill the input field which you want to update and hit submit . </p>
            <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="update product name" {...register('name')} />
                <input placeholder='update product price' {...register('price')} />
                <input  placeholder="update product category" {...register('category')} />
                  
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Update;