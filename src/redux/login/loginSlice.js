import { createSlice } from "@reduxjs/toolkit"
import { Autorization} from "../../API/login"


const init = {
    Log: "login",
    Password: "pass",
    IsLogin: false,
}

export const loginSlice = createSlice({
    name: "login",
    initialState: init,
    extraReducers: (builder) => {
        builder.addCase(Autorization.fulfilled, (state, action) => {
            state.IsLogin = action.payload
        })
        builder.addCase(Autorization.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export default loginSlice.reducer;