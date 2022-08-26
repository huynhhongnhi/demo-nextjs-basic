import { LoginPayload } from "../model"
import axiosClient from "./axios-client"

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('login', payload)
    },
    getProfile() {
        return axiosClient.get('/me')
    },
    getPost() {
        return axiosClient.get('/posts')
    }
}