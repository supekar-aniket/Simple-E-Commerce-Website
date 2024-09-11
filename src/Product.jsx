import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Product({products,setProducts}) {

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((productRes)=>productRes.data)
    .then((finalProduct)=>{
      setProducts(finalProduct.products);
    })
  },[])

  const getProducts = () => {
    return products.map((value,index) => {
      return(
        <GetProduct key={index} data={value}/>
      )
    })
  }

  return (
    <>
      {
        products.length > 1 ? 
          getProducts() : 
          <> 
            <div>No Product Found</div>
          </>
      }
    </>
  )
}

function GetProduct({data}){
  
  return(
    <div className="shadow-2xl mb-[10px] opacity-100">
      <img className='w-[100%] h-[220px]' src={data.thumbnail}></img>
      <div className="ml-[20px] p-[10px] text-[18px]">
        <h4>
          {data.title}
        </h4>
        <h4>
          {`$.${data.price}`}
        </h4>
      </div>
    </div>
  )
}