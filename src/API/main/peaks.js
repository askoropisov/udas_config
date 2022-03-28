import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setPeaks = createAsyncThunk(
    'main/setPeaks',
    async (k) => {
        const response = await axios.post("/api/main/peaks/set", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
)

export const getPeaks = createAsyncThunk(
    'main/getPeaks',
    async () => {
        return await axios.get("/api/main/peaks/get")
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