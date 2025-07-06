import {Button,Modal,Box, TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function ProductModal({open,handleClose,initialState}) {

  const navigate = useNavigate()

  const {createStockData} = useStockCall()

  const {brands, categories} = useSelector((state)=>state.stock)

  const [info,setInfo] = useState(initialState)


  const handleChange = (e)=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    createStockData("products",info)   

    handleClose() 
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Box sx={{display:"flex",flexDirection:"column" ,gap:"10px"}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="categoryId"
                    value={info.categoryId}
                    label="Category"
                    onChange={handleChange}
                    >
                    
                    {categories.map((cate) => (
                      <MenuItem  key={cate._id}  value={cate._id}>{cate.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="brandId"
                    value={info.brandId}
                    label="Brand"
                    onChange={handleChange}
                    >
                    <MenuItem onClick={() => navigate("/stock/brands")}>
                      Add New Brand
                    </MenuItem>
                    <hr />
                    {brands.map((brand) => (
                      <MenuItem  key={brand._id}  value={brand._id}>{brand.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <TextField
                label="Product Name"
                name="name"
                type="text"
                variant='outlined'
                onChange={handleChange}
                value={info.name}
                required
                fullWidth
            />
            
            <Button variant='contained' type='submit'>
            {info._id ? "Edit Firm":"Save Firm"}
            </Button>

            </Box>
        
        </Box>
        
      </Modal>
    </div>
  );
}
