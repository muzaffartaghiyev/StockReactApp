import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { btnStyle } from "../../styles/globalStyles";

import useStockCall from '../../hooks/useStockCall'


// our row id key was in format of _id, therefore we make convert it to make grid to be able to understand it
function getRowId(row){
        return row._id
    }

export default function SalesTable({handleOpen,setInitialState}) {

    const {sales} = useSelector((state)=>state.stock)

    const {deleteStockData} = useStockCall()    

    const columns = [
        { field: 'createdAt', 
            headerName: 'Date', 
            width: 200,
            editable: false, 
            headerAlign:"center",
            valueGetter: (value) => {
          return new Date(value).toLocaleString("de-DE");
          },
        }, 
        {
            field: 'brandId',
            headerName: 'Brand',
            width: 270,
            editable: false,
            headerAlign:"center",
            align:"center",
            valueGetter: (value) => value.name || "",
        },
        {
            field: 'productId',
            headerName: 'Product',
            width: 270,
            editable: false,
            headerAlign:"center",
            align:"center",
            valueGetter: (value) => value===null? "" :value.name,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 80,
            editable: false,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 80,
            editable: false,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 80,
            editable: false,
            headerAlign:"center",
            align:"center",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description:"This field will have delete and edit buttons",
            width: 150,
            headerAlign:"center",
            align:"center",
            editable: false,
            sortable: false,
            filterable:false,
            renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
              return [
              <GridActionsCellItem
                key={"edit"}
                icon={<EditIcon />}
                label="Edit"
                onClick={() => {
                  handleOpen();
                  setInitialState({ brandId, price, quantity, productId, _id });
                }}
                sx={btnStyle}
              />,
              <GridActionsCellItem
                key={"delete"}
                icon={<DeleteIcon />}
                label="Delete"
                onClick={() => deleteStockData("sales", _id)}
                sx={btnStyle}
              />,
            ];
          },
        },
      ];

  
  return (
    <Box sx={{ height: 400, width: '100%',mt:"1rem" }}>
      <DataGrid
        getRowId={getRowId}
        rows={sales}
        key={sales.id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}


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
