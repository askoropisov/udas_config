import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefPreassureMeter = createAsyncThunk(
    'flowmeter/preassureSensor/setCoefPreassure',
    async (k) => {
        const response = await axios.post("/api/flowmeter/preassure/polynoms", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
)

export const getCoefPreassureMeter = createAsyncThunk(
    'flowmeter/preassureSensor/getCoefPreassure',
        async () => {
            return await axios.get("/api/flowmeter/preassure")
                .then(res => {
                    const value = res.data;
                    return Promise.resolve(value)
                })
                .catch(err => {
                    console.log("err:", err)
                    return Promise.reject()
                })
        },
)