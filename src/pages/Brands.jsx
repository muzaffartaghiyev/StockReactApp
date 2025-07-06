import React, { useEffect } from 'react'

import {Typography,Button, Grid} from "@mui/material";

import useStockCall from '../hooks/useStockCall'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BrandCard from '../components/Cards/BrandCard';
import BrandModal from '../components/Modals/BrandModal';

const Brands = () => {

  const {getData} = useStockCall()
  const {brands} = useSelector((state)=>state.stock)
  
  useEffect(()=>{
      getData("brands")
  },[])
      
  const [initialState,setInitialState] = useState(
    { 
      name:"",
      image:""
    }
  )

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Typography variant="h4" component="h1" color='red'>
        Brands
      </Typography>
      <Button variant='contained' sx={{mt:3}} onClick={handleOpen}>
          New Brand
      </Button>

      <Grid container sx={{mt:"1rem"}}>
        {brands.map((brand)=>(
          <Grid item xs={12} md={6} lg={4} xl={3} >
            <BrandCard key={brand._id} {...brand} handleOpen={handleOpen} setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>

      { open && (<BrandModal open={open} handleClose={handleClose} initialState={initialState}/>)} 
    </div>
  )
}

export default Brands