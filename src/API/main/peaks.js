import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setPeaks = createAsyncThunk(
    'main/setPeaks',
    async (k) => {
        const response = await axios.post("/api/main/setPeaks", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
)

export const setCompliance = createAsyncThunk(
    'main/setCompliance',
    async (k) => {
        const response = await axios.post("/api/main/setCompliance", k)
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
        return await axios.get("/api/main")
            .then(res => {
                const value = res.data;
                return Promise.resolve(value)
            })
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            })
    }
)