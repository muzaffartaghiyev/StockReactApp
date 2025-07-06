import {Button,Modal,Box, TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';
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



export default function SaleModal({open,handleClose,initialState}) {

  const navigate = useNavigate();
  const {createStockData,updateStockData} = useStockCall()

  const {brands,products} = useSelector((state)=>state.stock)


  const [info,setInfo] = useState(initialState)

  const handleChange = (e)=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(info._id){
        updateStockData("sales",info)
    }
    else{
        createStockData("sales",info)   
    }

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
                    <InputLabel id="brand-select-label">Brand</InputLabel>
                    <Select
                    labelId="brand-select-label"
                    id="brand-select"
                    name="brandId"
                     value={info?.brandId?._id || info?.brandId  || ""}
                    label="Brand"
                    onChange={handleChange}
                    required
                    >
                    <MenuItem onClick={() => navigate("/stock/brands")}>
                      Add New Brand
                    </MenuItem>
                    {brands.map((brand) => (
                      <MenuItem  key={brand._id}  value={brand._id}>{brand.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="product-select-label">Product</InputLabel>
                    <Select
                    labelId="product-select-label"
                    id="product-select"
                    name="productId"
                    value={info?.productId?._id || info?.productId  || ""}
                    label="Product"
                    onChange={handleChange}
                    required
                    >
                    <MenuItem onClick={() => navigate("/stock/products")}>
                      Add New Product
                    </MenuItem>
                    {products.map((product) => (
                      <MenuItem  key={product._id}  value={product._id}>{product.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <TextField
                label="Quantity"
                name="quantity"
                type="number"
                variant='outlined'
                onChange={handleChange}
                value={info.quantity}
                required
                fullWidth
                />
                <TextField
                label="Price"
                name="price"
                type="number"
                variant='outlined'
                onChange={handleChange}
                value={info.price}
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
