import { useDispatch } from "react-redux"

import {fetchStart, fetchFail, registerSuccess} from "../features/authSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuthCall = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const register=async(userInfo)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axios.post("https://10147.fullstack.clarusway.com/users/",userInfo)
            dispatch(registerSuccess(data))

            navigate('/stock')
        }catch(error){
            dispatch(fetchFail())
        }
    }

    const logout=async(token)=>{
        dispatch(fetchStart())
        try{
            const {data} = await axios.get("https://10147.fullstack.clarusway.com/auth/logout",token)

        }catch(error){
            dispatch(fetchFail())
        }
    }

    return {register}

}


export default useAuthCall