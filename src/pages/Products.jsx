import { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'

import {Typography,Button,Container} from "@mui/material";
import ProductsTable from '../components/Tables/ProductsTable';
import ProductModal from '../components/Modals/ProductModal';
import { useSelector } from 'react-redux';



const Products = () => {

  const {getData} = useStockCall()

  const { loading, error } = useSelector((state) => state.stock);

  
  useEffect(()=>{
      getData("products")
      getData("brands")
      getData("categories")
  },[])


  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [initialState,setInitialState] = useState(
      {name:"",
        categoryId:"",
        brandId:""
      }
    )


  return (
    <Container maxWidth={"xl"}>
    <Typography align="center"
      variant="h4" component="h1" color='red' sx={{mb:"1rem"}}>
        Products
      </Typography>

      {loading?(
        <Typography
          align="center"
          variant="h5"
          component="h3"
          color="secondary.second"
        >
          Loading....
        </Typography>
      ):error?(
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ):(
        <>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ marginBottom: "1rem" }}
          >
            New Product
          </Button>

          <ProductsTable/>

          {open && (
            <ProductModal
              open={open}
              handleClose={handleClose}
              initialState={initialState}
            />
          )}
        </>
      )}
      
      </Container>
  )
}

export default Products