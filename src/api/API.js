import axios from 'axios'


let axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
    }
)

export const getUsers = async () => {
   let {data} = await axiosInstance('/users')
    return data
}

export const getUser = async (id) => {
    let {data} = await axiosInstance(`users/${id}`)
    return data
}