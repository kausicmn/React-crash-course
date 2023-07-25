import React, { useEffect, useState } from 'react'

const ProductList = ({category}:{category:string}) => {
    const [products,setproducts] =useState<string[]>([]);
    useEffect(()=>{
        setproducts(['Clothing','Household'])
        console.log('Fetching Products in',category)
    },[category])
  return (
    <div>ProductList</div>
  )
}

export default ProductList