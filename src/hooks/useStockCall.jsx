import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/stockSlice'

const useStockCall = () => {
    const dispatch = useDispatch()
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const token = useSelector((state)=>state.auth.token)

    const getFirms=async()=>{

        dispatch(fetchStart())

        try{
            const {data} = await axios.get(`${BASE_URL}/firms`,{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
        }
        catch(error){
            dispatch(fetchFail())
        }
    }
  return {getFirms}
}

export default useStockCall
