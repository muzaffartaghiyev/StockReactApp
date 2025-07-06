import { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'


import {Typography,Button} from "@mui/material";
import ProductsTable from '../components/Tables/ProductsTable';


const Products = () => {

  const {getData} = useStockCall()
  
  useEffect(()=>{
      getData("products")
  },[])


  return (
    <div>
    <Typography variant="h4" component="h1" color='red'>
        Products
      </Typography>
      <Button variant='contained' sx={{mt:3}}>
          New Product
      </Button>

      <ProductsTable />
      
      </div>
  )
}

export default Products