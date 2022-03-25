import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setIsOpenFlapAsync = createAsyncThunk(
    'flowmeter/flap/setIsOpenFlap',
    async (isOn) => {
        const response = await axios.post(`/api/flowmeter/flap/${isOn ? "open" : "close"}`)
            .then(res => Promise.resolve(isOn))
            .catch(err => Promise.reject())
        return response
    },
) 


export const getFlap = createAsyncThunk(
    'flowmeter/flap/getFlap',
    async () => {
        return await axios.get("/api/flowmeter/flap/status")
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