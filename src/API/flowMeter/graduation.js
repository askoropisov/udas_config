import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefGrad  = createAsyncThunk(
    'flowmeter/graduation/setPoint',
    async (form) => {
        const response = await axios.post("/api/flowmeter/grad/onepoint", form)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 

export const getPolynom = createAsyncThunk(
    'flowmeter/graduation/getPolynom',
    async () => {
        return await axios.get("/api/flowmeter/grad/graduation")
            .then(res => {
                const value = res.data;
                //передава параметр в промис, мы его можем вытащить из action.payload в extraReducer
                return Promise.resolve(value)
            })
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            })
    },
)
