import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setIsOpenFlapAsync = createAsyncThunk(
    'flowmeter/flap/setIsOpenFlap',
    async (isOn) => {
        const response = await axios.post(`/api/flowmeter/flap/${isOn ? "open" : "close"}`)
            .then(res => Promise.resolve(isOn))
            .catch(err => Promise.reject())
        return response
    }
) 