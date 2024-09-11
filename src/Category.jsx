import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Category({setProducts}) {

  let [categories,setCategories] = useState([]);

  let [categoryName,setCategoryName] = useState('');

  useEffect(()=>{   // we use useEffect to fetch categories
    axios.get('https://dummyjson.com/products/categories')
    .then((responce)=>responce.data)
    .then((finalResponce)=>{
      setCategories(finalResponce);
      // console.log(finalResponce);
    })
  },[]); // add blank array dependency for only one time run at the page refresh

  useEffect(()=>{
    if(categoryName !== ''){
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((responce)=>responce.data)
      .then((finalResponce) => {
        setProducts(finalResponce.products);
      })
    }
  },[categoryName])

  const displayCategories = categories.map((value,index)=>{
    return(
      <li onClick={()=>setCategoryName(value.name)} className='bg-[#ccc] p-[10px] mb-[5px] cursor-pointer' key={index}>{value.name}</li>
    )
  })
  
  return (
    <div>
      <h3 className='text-center text-3xl font-[600] p-[20px]'>Product Categories</h3>
    
      <div className='text-[22px] font-[500] ml-[25px]'>
        <ul>
        {displayCategories}
        </ul>
      </div>

    </div>
  )
}
