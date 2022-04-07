import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getSpectrometers = createAsyncThunk(
    'configuration/getSpectrometers',
    async () => {
        return await axios.get("/api/configuration/spectrometers")
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