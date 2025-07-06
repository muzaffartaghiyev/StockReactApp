import { useDispatch, useSelector } from "react-redux"

import {fetchStart, fetchFail, registerSuccess, logoutSuccess, loginSuccess} from "../features/authSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import useAxios from './useAxios'

const useAuthCall = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {axiosWithToken} = useAxios()

    const register=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axiosWithToken.post(`/users`,userInfo)
            dispatch(registerSuccess(data))

            navigate('/stock')
        }catch(error){
            dispatch(fetchFail())
        }
    }

    const login=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axiosWithToken.post(`/auth/login`,userInfo)

            dispatch(loginSuccess(data))
            navigate("/stock")

        }catch(error){
            dispatch(fetchFail())
        }
    }

    const logout=async()=>{
        dispatch(fetchStart())
        try{
            const {data} = await axiosWithToken.get(`/auth/logout`)
            dispatch(logoutSuccess(data))
            navigate("/")

        }catch(error){
            dispatch(fetchFail())
        }
    }

    return {register,login,logout}

}


export default useAuthCall