import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setCoefFlowMeter = createAsyncThunk(
    'flowmeter/flowMeterSensor/setCoef',
    async (k) => {
        const response = await axios.post("/api/flowmeter/flow/polynoms", k)
            .then(res => console.log("res:", res))
            .catch(err => {
                console.log("err:", err)
                return Promise.reject()
            }
            )
        return response
    },
)