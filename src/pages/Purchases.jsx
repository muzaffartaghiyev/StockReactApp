import React, { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'

import {Button, Container,Typography} from "@mui/material";
import PurchasesTable from '../components/Tables/PurchasesTable';
import { useSelector } from 'react-redux';
import PurchaseModal from '../components/Modals/PurchaseModal';

const Purchases = () => {

  const {getPurProBrandFirm} = useStockCall()

  const { loading, error } = useSelector((state) => state.stock);
  
    useEffect(()=>{
        getPurProBrandFirm()
    },[])


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
    const [initialState,setInitialState] = useState(
          {
            brandId: "",
            firmId: "",
            productId: "",
            quantity: "",
            price: "",
       }
    )

  return (
    <Container maxWidth={"xl"}>

      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="red"
        sx={{mb:"1rem"}}>
        Purchases
      </Typography>

      {loading ? (
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
        <Button variant="contained" 
        onClick={handleOpen} 
        sx={{marginBottom:"1rem"}}>
          New Purchase
        </Button>

        <PurchasesTable  
        handleOpen={handleOpen} 
        setInitialState={setInitialState} 
          
        />

        {open && (
          <PurchaseModal
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

export default Purchases