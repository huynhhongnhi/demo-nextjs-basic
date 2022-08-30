import { LoginPayload } from "../model"
import axiosClient from "./axios-client"

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('auth/login', payload)
    },
    getProfile() {
        try {
            return axiosClient.get('/me')
        } catch (error) {
            console.log('>>>>>>error')
            console.log(error)
        }
    },
    getPost() {
        return axiosClient.get('/posts')
    }
}