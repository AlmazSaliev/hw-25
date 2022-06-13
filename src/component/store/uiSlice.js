import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ogo',
    initialState: {
        spa: false, 
        spinner: false, 
        btnname: 'Sing up',
        home: true,
        user: false,
    },
    reducers: {
        newspa (state){
            state.spa = true
            state.home = false
        },
        home(state){
            state.home = true
            state.spa = false
            state.user = false
        },
        gospinner(state){
            state.spinner = true
        },
        stopspinner(state){
            state.spinner = false
        },
        btn(state, action){
            state.btnname = action.payload
            state.spa = false
            state.user = false
        },
        user(state){
            state.user = true
            state.spa = false
            state.home = false
        }
    }
})
export const uiActions = uiSlice.actions
export default uiSlice