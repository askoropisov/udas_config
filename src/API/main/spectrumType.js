import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getTypePrimary = createAsyncThunk(
    'main/type/primary',
    async () => {
        return await axios.get("/api/main/primary")
            .then(res => {
                const value = res.data;
                //передава параметр в промис, мы его можем вытащить из action.payload в extraReducer
                return Promise.resolve(value)
            })
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            })
    }
)

export const getTypeBack = createAsyncThunk(
    'main/type/back',
    async () => {
        return await axios.get("/api/main/type/background")
            .then(res => {
                const value = res.data;
                //передава параметр в промис, мы его можем вытащить из action.payload в extraReducer
                return Promise.resolve(value)
            })
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            })
    }
)

export const getTypeRef = createAsyncThunk(
    'main/type/ref',
    async () => {
        return await axios.get("/api/main/type/reference")
            .then(res => {
                const value = res.data;
                //передава параметр в промис, мы его можем вытащить из action.payload в extraReducer
                return Promise.resolve(value)
            })
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            })
    }
)