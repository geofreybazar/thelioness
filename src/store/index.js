import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import isLoadingElsaCoinSlice from "./isLoadingElsaCoinSlice";

const store = configureStore({
    reducer:{user:userSlice.reducer , isLoadingElsaCoin:isLoadingElsaCoinSlice.reducer}
});

export default store;