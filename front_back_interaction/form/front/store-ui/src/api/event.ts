import axios, { Axios } from 'axios';
import { errorHandler } from './error';
export class eventAPI{
    static baseURL:  "https://yourdomain.com/api/v1"
    static headers: {
        "Content-Type": "application/json",
    }
    apiClient: Axios
    
    constructor(){
        this.apiClient = axios.create({
            baseURL: "https://yourdomain.com/api/v1",
            headers: {
                "Custom-Language": "en",
            },
        });
          // "api" axios instance
        this.apiClient.interceptors.response.use(undefined, (error) => {
            return errorHandler(error)
        })

    }

    async getAll () {
        const response = await this.apiClient.get('')
        return response.data.json
    }

    async postAll(data: object){
        const response = await this.apiClient.post('',data)
        return response.data.json
    }
}