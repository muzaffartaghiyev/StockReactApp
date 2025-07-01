import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'
const Purchases = () => {

  const {getData} = useStockCall()
  
    useEffect(()=>{
        getData("purchases")
    },[])

  return (
    <div>Purchases</div>
  )
}

export default Purchases