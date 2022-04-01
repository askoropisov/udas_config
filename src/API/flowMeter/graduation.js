import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefGrad  = createAsyncThunk(
    'flowmeter/graduation/setPoint',
    async (k) => {
        const response = await axios.post("/api/flowmeter/grad/onepoint", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 

export const setGraduation  = createAsyncThunk(
    'flowmeter/graduation/setGrad',
    async () => {
        const response = await axios.post("/api/flowmeter/grad/graduation")
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 

export const nullGraduation  = createAsyncThunk(
    'flowmeter/graduation/nullGrad',
    async () => {
        const response = await axios.post("/api/flowmeter/grad/nullgraduation")
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 