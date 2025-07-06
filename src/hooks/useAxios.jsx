import axios from 'axios'
import { useSelector } from 'react-redux'

const useAxios = () => {

    const token = useSelector((state)=>state.auth.token)

    const axiosWithToken= axios.create({
        baseURL:import.meta.env.VITE_BASE_URL,
        headers:{
            Authorization:`Token ${token}`
        }
    })


  return {axiosWithToken}
}

export default useAxios
