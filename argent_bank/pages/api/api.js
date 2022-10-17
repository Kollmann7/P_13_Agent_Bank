// api.js
import Axios from "axios"

let url = 'http://localhost:3002/api/v1/'
const api = Axios.create({
    baseURL: url,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api

