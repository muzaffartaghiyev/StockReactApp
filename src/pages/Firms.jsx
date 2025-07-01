import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'


import {Container,Typography,Button, Grid} from "@mui/material";
import { useSelector } from 'react-redux';
import FirmCard from '../components/Cards/FirmCard';


const Firms = () => {
  const {getData} = useStockCall()
  const {firms} = useSelector((state)=>state.stock)

  useEffect(()=>{
      getData("firms")
  },[])
    
  
  return (
    <div>
      <Typography variant="h4" component="h1" color='secondary.second'>
        Firms
      </Typography>
      <Button variant='contained' sx={{mt:3}}>
          New Firm
      </Button>

      <Grid container>
        {firms.map((firm)=>(
          <Grid item xs={12} md={6} lg={4} xl={3} >
            <FirmCard key={firm._id} {...firm}/>
          </Grid>
        ))}
      </Grid>
    
    </div>
  )
}

export default Firms