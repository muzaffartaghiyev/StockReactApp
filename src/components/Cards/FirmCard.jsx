import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {CardMedia,Container} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import {btnStyle} from "../../styles/globalStyles"

export default function FirmCard({_id,name,phone,image,address}) {
  

  return (
    <Container>

   
    <Card sx={{ maxWidth: 320 , height:400, flexDirection:"column", padding:"0.5rem",mt:"1rem"}}>
    
      <CardHeader      
         title={name}
        subheader={address}
      />
    
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="firm"
        sx={{height:140 , objectFit:"contain"}}
      />
     
      <CardContent sx={{ width:"340",  textAlign:"center"}}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {phone}
        </Typography>
      </CardContent>
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <DeleteOutlineIcon sx={btnStyle}/>
        </IconButton>
        <IconButton aria-label="share">
         <EditIcon sx={btnStyle}/>
        </IconButton>
       
      </CardActions> 

    </Card>
     </Container>
  );
}