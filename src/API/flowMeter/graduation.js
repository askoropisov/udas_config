import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefGrad  = createAsyncThunk(
    'flowmeter/graduation/setCoef',
    async (k) => {
        const response = await axios.post("/api/flowmeter/grad/set", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 