import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpectrum = createAsyncThunk(
    'configuration/getSpectrum',
    async () => {
        return await axios.get("/api/configuration/spectrum")
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