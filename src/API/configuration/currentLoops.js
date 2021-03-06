import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//гет и сет запросы через обещания
export const setIsOpenLoopsAsync = createAsyncThunk(
    'configuration/currentloops/setIsOpenLoops',
    async (isOn) => {
        const response = await axios.post(`/api/configuration/currentloops/${isOn ? "on" : "off"}`)
            .then(res => Promise.resolve(isOn))
            .catch(err => Promise.reject())
        return response
    }
) 


export const getCurrentLoops = createAsyncThunk(
    'configuration/currentloops/getCurrentLoops',
    async () => {
        return await axios.get("/api/configuration/currentloops/status")
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