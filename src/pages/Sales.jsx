import React, { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'


import {Typography,Button,Container} from "@mui/material";
import SalesTable from '../components/Tables/SalesTable';
import { useSelector } from 'react-redux';
import SaleModal from '../components/Modals/SaleModal';

const Sales = () => {

  const {getSalesProBrand} = useStockCall()

  const { loading, error } = useSelector((state) => state.stock);
  
  useEffect(()=>{
        getSalesProBrand()
    },[])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState,setInitialState]=useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "", 
    })


  return (
    <Container maxWidth={"xl"}>
      <Typography
      align="center"
      variant="h4"
      component="h1"
      color="red"
      sx={{mb:"1rem"}}
      >
      Sales
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
        <Button variant="contained" onClick={handleOpen} sx={{marginBottom:"1rem"}}>
          New Sale
        </Button>

        <SalesTable  handleOpen={handleOpen} setInitialState={setInitialState} />

        {open && (
          <SaleModal
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

export default Sales