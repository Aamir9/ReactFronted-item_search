import axios from "axios";
import * as appConstants from './constants'
const axiosClient = axios.create({
    baseURL:appConstants.baseUrl,
    headers:{
        "accept":"*/*",
        // "Content-Type": "multipart/form-data"
    }
})

axiosClient.interceptors.response.use(res =>res.data)

export default axiosClient