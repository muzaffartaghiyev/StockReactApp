import { useDispatch, useSelector } from "react-redux"

import {fetchStart, fetchFail, registerSuccess, logoutSuccess, loginSuccess} from "../features/authSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuthCall = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state)=>state.auth.token)

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const register=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axios.post(`${BASE_URL}/users`,userInfo)
            dispatch(registerSuccess(data))

            navigate('/stock')
        }catch(error){
            dispatch(fetchFail())
        }
    }

    const login=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axios.post(`${BASE_URL}/auth/login`,userInfo)

            dispatch(loginSuccess(data))
            navigate("/stock")

        }catch(error){
            dispatch(fetchFail())
        }
    }

    const logout=async()=>{
        dispatch(fetchStart())
        try{
            const {data} = await axios.get(`${BASE_URL}/auth/logout`,{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
            dispatch(logoutSuccess())
            navigate("/")

        }catch(error){
            dispatch(fetchFail())
        }
    }

    return {register,login,logout}

}


export default useAuthCall