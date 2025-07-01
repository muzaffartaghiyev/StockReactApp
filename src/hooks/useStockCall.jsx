import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, firmSuccess } from '../features/stockSlice'
import axios from "axios"

const useStockCall = () => {
    const dispatch = useDispatch()
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const token = useSelector((state)=>state.auth.token)
    
    const getData=async(url)=>{

        dispatch(fetchStart())

        try{
            const {data} = await axios(`${BASE_URL}/${url}`,{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
            dispatch(firmSuccess(data))

        }
        catch(error){
            dispatch(fetchFail())
        }
    }
  return {getData}
}

export default useStockCall
