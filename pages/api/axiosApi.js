import axios from 'axios'

const axiosApi = axios.create({
    baseURL:"https://zero-back-01.herokuapp.com/"
})

export default axiosApi