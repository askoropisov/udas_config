import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Autorization = createAsyncThunk(
    'login/Autorization',
    async (k) => {
        const response = await axios.post("/api/login/autorization", k)
            .then(res => res.data)
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
)