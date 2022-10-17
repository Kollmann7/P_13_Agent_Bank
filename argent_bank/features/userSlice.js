import {  createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie, deleteCookie } from 'cookies-next'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        id:'',
        token:null,
    },
    reducers:{
        setToken(state, action) {
            state.token = action.payload.token
            setCookie('token', action.payload.token)
        },
        setUser(state, action){
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = getCookie('token')
        },
        removeToken(state){
            state.token = null
            deleteCookie('token')
        }
    }
})

export const {setToken, setUser, removeToken} = userSlice.actions

export const  selecedtUser = (state) => state.user

export default userSlice.reducer
