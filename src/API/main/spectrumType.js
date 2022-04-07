import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getSpectrums = createAsyncThunk(
    'main/getSpectrum',
        async () => {
            return await axios.get("/api/main/spectrums")
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

