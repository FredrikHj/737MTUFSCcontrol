import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    fsuipcServer: any,
}

const initialState: State = {
    fsuipcServer: null,
}

export const ServerInstancesSlicer = createSlice({
    name: "ServerInstances",
    initialState,
    reducers: {
        setFsuipcServer: (state: State, action: PayloadAction<any>) => {
            state.fsuipcServer = action.payload;
        },
    },
});

export const {  setFsuipcServer } = ServerInstancesSlicer.actions;
export default ServerInstancesSlicer.reducer;