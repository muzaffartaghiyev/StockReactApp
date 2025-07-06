import React from 'react'
import { useDispatch} from 'react-redux'
import { fetchFail, fetchStart, stockDataSuccess } from '../features/stockSlice'

import useAxios from './useAxios'

const useStockCall = () => {
    const dispatch = useDispatch()

    const {axiosWithToken} = useAxios()
    
    const getData=async(url)=>{

        dispatch(fetchStart())
        try{
            const {data} = await axiosWithToken.get(url)

            dispatch(stockDataSuccess({data,url}))
        }
        catch(error){
            dispatch(fetchFail())
        }
    }

    const createStockData = async(url,info)=>{
        dispatch(fetchStart)

        try{
            const {data} = await axiosWithToken.post(url,info)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail)
        }
    }

    const updateStockData = async(url,info) =>{
        dispatch(fetchStart)

        try{
            const {data} = await axiosWithToken.put(`${url}/${info._id}`,info)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail)
        }

    }

    const deleteStockData = async(url,id)=>{
        dispatch(fetchStart)

        try{
            const {data} = await axiosWithToken.delete(`${url}/${id}`)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail)
        }
    }
  return {getData,createStockData,updateStockData,deleteStockData}
}

export default useStockCall
