import { useDispatch, useSelector } from "react-redux"

import {fetchStart, fetchFail, registerSuccess, logoutSuccess, loginSuccess} from "../features/authSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuthCall = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state)=>state.auth.token)


    const register=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axios.post("https://10147.fullstack.clarusway.com/users",userInfo)
            dispatch(registerSuccess(data))

            navigate('/stock')
        }catch(error){
            dispatch(fetchFail())
        }
    }

    const login=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axios.post("https://10147.fullstack.clarusway.com/auth/login",userInfo)

            dispatch(loginSuccess(userInfo))
            navigate("/stock")

        }catch(error){
            dispatch(fetchFail())
        }
    }

    const logout=async()=>{
        dispatch(fetchStart())
        try{
            const {data} = await axios.get("https://10147.fullstack.clarusway.com/auth/logout",{
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