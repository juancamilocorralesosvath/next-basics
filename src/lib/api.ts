import axios from "axios";

const instance = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api/',
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            // aqui podemos hacer un redirect

        }
        return Promise.reject(error)
    }
)

export default instance