import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setIsOpenLoopsAsync = createAsyncThunk(
    'configuration/currentloops/setIsOpenLoops',
    async (isOn) => {
        const response = await axios.post(`/api/configuration/currentloops/${isOn ? "on" : "off"}`)
            .then(res => Promise.resolve(isOn))
            .catch(err => Promise.reject())
        return response
    }
) 