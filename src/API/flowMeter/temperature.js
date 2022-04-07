import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getTemperature = createAsyncThunk(
    'flowmeter/temperature/getTemperature',
        async () => {
            return await axios.get("/api/flowmeter/temperature")
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