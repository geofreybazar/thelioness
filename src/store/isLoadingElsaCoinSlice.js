import { createSlice } from "@reduxjs/toolkit";

const isLoadingElsaCoinSlice = createSlice({
    name:'isLoadingElsaCoin',
    initialState: {
        isLoadingElsaCoin:false
    },
    reducers:{
        isLoading(state,action){
            state.isLoadingElsaCoin = action.payload
        },
    }
});

export const isLoadingElsaCoinActions = isLoadingElsaCoinSlice.actions;
export default isLoadingElsaCoinSlice;