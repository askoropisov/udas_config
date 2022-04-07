import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getEscale = createAsyncThunk(
    'configuration/getEscale',
    async () => {
        return await axios.get("/api/configuration/escale")
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