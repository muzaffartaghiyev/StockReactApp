import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';


import useStockCall from '../../hooks/useStockCall'



function getRowId(row){
        return row._id
    }


export default function ProductsTable() {

    const {products} = useSelector((state)=>state.stock)
    const {deleteStockData} = useStockCall()
    

    const columns = [
        { field: '_id', headerName: '#', width: 250 },
        {
            field: 'categoryId',
            headerName: 'Category',
            width: 150,
            editable: false,
            valueGetter: (value) => `${value.name}`,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            width: 150,
            editable: false,
            valueGetter: (value) => `${value.name}`,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
            editable: false,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 150,
            editable: false,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description:"This field will have delete button",
            width: 150,
            headerAlign:"center",
            align:"center",
            editable: false,
            sortable: false,
            filterable:false,
            renderCell:(params)=>(
            <DeleteIcon onClick={()=>deleteStockData("products",params.id)} sx={{cursor:"pointer"}}/>
                )
        },
        ];

    
  return (
    <Box sx={{ height: 400, width: '100%',mt:"1rem" }}>
      <DataGrid
        getRowId={getRowId}
        rows={products}
        key={products.id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}
        checkboxSelection

        sx={{
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
        }}
        
      />
    </Box>
  );
}
