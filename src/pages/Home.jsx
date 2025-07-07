import React, { useEffect } from 'react'
import KpiCards from '../components/KpiCards'
import Charts from '../components/Charts'
import useStockCall from '../hooks/useStockCall'

const Home = () => {

  const {getData} = useStockCall()

  useEffect(()=>{
    getData("sales")
    getData("purchases")
  },[])

  return (
    <div>
      <KpiCards/>
      <Charts/>
    </div>
  )
}

export default Home