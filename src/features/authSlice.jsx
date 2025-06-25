import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    isAdmin:null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess:(state,{payload})=>{
      state.currentUser = payload.data.username;
      state.token = payload.token;
      state.loading = false;
    },
    loginSuccess:(state,{payload})=>{
      state.currentUser = payload?.data?.username;
      state.token = payload?.token;
      state.isAdmin = payload.user?.isAdmin
      state.loading = false;
    },
    logoutSuccess:(state)=>{
      state.token=null,
      state.currentUser=null,
      state.loading = false
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  loginSuccess,
  logoutSuccess
} = authSlice.actions;
export default authSlice.reducer;
