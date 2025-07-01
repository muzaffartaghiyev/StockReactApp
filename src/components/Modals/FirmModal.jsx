import * as React from 'react';
import {Button,Modal,Box, TextField} from '@mui/material';


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

export default function FirmModal({open,handleClose,initialState}) {
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{display:"flex",flexDirection:"column" ,gap:"10px"}}>
                <TextField
                label="Firm Name"
                name="name"
                type="text"
                variant='outlined'
                // onChange={handleChange}
                // value={info.name}
                required
                fullWidth
            />
            <TextField
                label="Firm Name"
                name="name"
                type="text"
                variant='outlined'
                // onChange={handleChange}
                // value={info.name}
                required
                fullWidth
            />
            <TextField
                label="Firm Name"
                name="name"
                type="text"
                variant='outlined'
                // onChange={handleChange}
                // value={info.name}
                required
                fullWidth
            />
            <TextField
                label="Firm Name"
                name="name"
                type="text"
                variant='outlined'
                // onChange={handleChange}
                // value={info.name}
                required
                fullWidth
            />
            <Button variant='contained' type='submit'>Save Firm</Button>
            </Box>
        
        </Box>
        
      </Modal>
    </div>
  );
}
