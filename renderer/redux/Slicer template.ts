import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {

}

const initialState: State = {

}

export const AppStartSlicer = createSlice({
    name: "AppStart",
    initialState,
    reducers: {
        setAppName: (state: State, action: PayloadAction<?>) => {
            state.appName = action.payload;
        },

    },
});

export const {  setAppName } = AppStartSlicer.actions;
export default AppStartSlicer.reducer;