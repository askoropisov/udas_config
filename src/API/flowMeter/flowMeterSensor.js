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

export const getCoefFlowMeter = createAsyncThunk(
    'flowmeter/flowMeterSensor/getCoef',
        async () => {
            return await axios.get("/api/flowmeter/flow")
                .then(res => {
                    const value = res.data;
                    console.log("flow", value)
                    //передава параметр в промис, мы его можем вытащить из action.payload в extraReducer
                    return Promise.resolve(value)
                })
                .catch(err => {
                    console.log("err:", err)
                    return Promise.reject()
                })
        },
)