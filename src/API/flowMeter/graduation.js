import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefGrad  = createAsyncThunk(
    'flowmeter/graduation/setPoint',
    async (form) => {
        const response = await axios.post("/api/flowmeter/grad/onepoint", form)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
) 
