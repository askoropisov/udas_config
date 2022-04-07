import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllConfiguration = createAsyncThunk(
    'configuration/general/getAll',
    async () => {
        return await axios.get("/api/configuration")
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