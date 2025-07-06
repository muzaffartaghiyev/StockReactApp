import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {CardMedia,Container} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import {btnStyle} from "../../styles/globalStyles"

import useStockCall from '../../hooks/useStockCall'


const BrandCard = ({_id,name,image,handleOpen,setInitialState}) => {

    const {deleteStockData} = useStockCall()

  return (
    <Container>
      <Card sx={{ maxWidth: 320 , height:400, flexDirection:"column", padding:"0.5rem",mt:"1rem",boxShadow: 6}}>
      
        <CardHeader      
          title={name}
          sx={{textAlign:"center",mb:"1rem"}}
        />
      
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="brand"
          sx={{height:140 , objectFit:"contain"}}
        />
      
        <CardContent sx={{ width:"340",  textAlign:"center"}}>
          
        </CardContent>
      
        <CardActions disableSpacing sx={{display:"flex", justifyContent:"center"}}>
          <IconButton aria-label="add to favorites">
          <DeleteOutlineIcon sx={btnStyle} onClick={()=>deleteStockData("brands",_id)}/>
          </IconButton>
          <IconButton aria-label="share">
          <EditIcon sx={btnStyle} onClick={()=>{handleOpen(),setInitialState({_id,name,image})}} />
          </IconButton>
        
        </CardActions> 

      </Card>
    </Container>
  )
}

export default BrandCard
