import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        publicKey:null,
        balance:null
    },
    reducers:{
        login(state,action){
            state.user = action.payload
        },
        logout(state){
            state.user = null
        },
        setUser(state,action){
            state.user = action.payload
        },
    }
});

export const userActions = userSlice.actions;
export default userSlice;