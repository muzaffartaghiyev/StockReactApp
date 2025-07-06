import React from 'react'
import { useDispatch} from 'react-redux'
import { fetchFail, fetchStart, ProCatBrandSuccess, SalesProBrandSuccess,PurProBrandFirmSuccess,stockDataSuccess } from '../features/stockSlice'

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
        dispatch(fetchStart())

        try{
            const {data} = await axiosWithToken.post(url,info)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail())
        }
    }

    const updateStockData = async(url,info) =>{
        dispatch(fetchStart())

        try{
            const {data} = await axiosWithToken.put(`${url}/${info._id}`,info)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail())
        }

    }

    const deleteStockData = async(url,id)=>{
        dispatch(fetchStart())

        try{
            const {data} = await axiosWithToken.delete(`${url}/${id}`)
            getData(url)
        }
        catch(error){
            dispatch(fetchFail())
        }
    }

 
    const getProCatBrand = async()=>{

        dispatch(fetchStart())
        try{
           const [products,brands,categories] = await Promise.all([
                axiosWithToken.get("products"),
                axiosWithToken.get("brands"),
                axiosWithToken.get("categories"),
            ])

            dispatch(ProCatBrandSuccess([
                products?.data?.data,
                brands?.data?.data,
                categories?.data?.data]))
        }
        catch(error){
            dispatch(fetchFail())
        }
    }

    const getSalesProBrand = async()=>{

        dispatch(fetchStart())
        try{
           const [sales,products,brands] = await Promise.all([
               axiosWithToken.get("sales"),
                axiosWithToken.get("products"),
                axiosWithToken.get("brands"),
            ])

            dispatch(SalesProBrandSuccess([
                sales?.data?.data,
                products?.data?.data,
                brands?.data?.data,
                ]))
        }
        catch(error){
            dispatch(fetchFail())
        }
    }

    const getPurProBrandFirm = async()=>{

        dispatch(fetchStart())
        try{
           const [purchases,products,brands,firms] = await Promise.all([
                axiosWithToken.get("purchases"),
                axiosWithToken.get("products"),
                axiosWithToken.get("brands"),
                axiosWithToken.get("firms"),
            ])

            dispatch(PurProBrandFirmSuccess([
                purchases?.data?.data,
                products?.data?.data,
                brands?.data?.data,
                firms?.data?.data,
                ]))
        }
        catch(error){
            dispatch(fetchFail())
        }
    }


  return {getData,createStockData,updateStockData,deleteStockData,getProCatBrand,getSalesProBrand,getPurProBrandFirm}
}

export default useStockCall
