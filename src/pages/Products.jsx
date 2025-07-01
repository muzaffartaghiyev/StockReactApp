import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'

const Products = () => {

  const {getData} = useStockCall()
  
    useEffect(()=>{
        getData("products")
    },[])
  return (
    <div>Products</div>
  )
}

export default Products