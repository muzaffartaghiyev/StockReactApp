import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",

    initialState:{
        loading:false,
        error:false,
        firms:[],
        brands:[],
        purchases:[],
        products:[],
        sales:[],
        categories:[]
    },
    reducers:{
        fetchStart: state => {
      state.loading = true;
      state.error = false;
        },
        fetchFail: state => {
      state.loading = false;
      state.error = true;
        },
        stockDataSuccess:(state,{payload})=>{
            state[payload.url] = payload.data.data.reverse()
            state.loading = false
            state.error = false
        },

        ProCatBrandSuccess:(state,{payload})=>{          
          state.products = payload[0]
          state.brands = payload[1]
          state.categories = payload[2]
          state.loading = false
        },

        SalesProBrandSuccess:(state,{payload})=>{          
          state.sales = payload[0]
          state.products = payload[1]
          state.brands = payload[2]
          state.loading = false
        },

        PurProBrandFirmSuccess:(state,{payload})=>{          
          state.purchases = payload[0]
          state.products = payload[1]
          state.brands = payload[2]
          state.firms = payload[3]
          state.loading = false
        }
    }
})


export const {fetchStart,fetchFail,stockDataSuccess,ProCatBrandSuccess,SalesProBrandSuccess,PurProBrandFirmSuccess} = stockSlice.actions

export default stockSlice.reducer