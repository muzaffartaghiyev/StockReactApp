import { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'


import {Typography,Button, Grid} from "@mui/material";
import { useSelector } from 'react-redux';
import FirmCard from '../components/Cards/FirmCard';
import FirmModal from '../components/Modals/FirmModal';


const Firms = () => {
  const {getData} = useStockCall()
  const {firms} = useSelector((state)=>state.stock)



  useEffect(()=>{
      getData("firms")
  },[])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState,setInitialState] = useState(
    {name:"",
      phone:"",
      address:"",
      image:""
    }
  )
    
  
  return (
    <div>
      <Typography variant="h4" component="h1" color='red'>
        Firms
      </Typography>
      <Button variant='contained' sx={{mt:3}} onClick={handleOpen}>
          New Firm
      </Button>

      <Grid container sx={{mt:"1rem"}}>
        {firms.map((firm)=>(
          <Grid item xs={12} md={6} lg={4} xl={3} >
            <FirmCard key={firm._id} {...firm} handleOpen={handleOpen} setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>

     { open && (<FirmModal open={open} handleClose={handleClose} initialState={initialState}/>)} 
    
    
    </div>
  )
}

export default Firms