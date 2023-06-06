import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    name: string,
    connectionLoading: boolean,
    connected: boolean,
    stateName: string,
    errorInfo: string,
}

const initialState: State = {
    name: "FSUIPC",
    connectionLoading: false,
    connected: false,
    stateName: generalTexts.conStates.state["notStarted"],
    errorInfo: "",
}

export const FSUIPCSlicer = createSlice({
    name: "FSUIPCSlicer",
    initialState,
    reducers: {
        setConnectionLoading : (state: State, action: PayloadAction<boolean>) => {
            state.connectionLoading = action.payload;
        },
        setConnected : (state: State, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
        },
        setStateName: (state: State, action: PayloadAction<string>) => {
            state.stateName = action.payload;
        },
        setErrorInfo: (state: State, action: PayloadAction<string>) => {
            state.errorInfo = action.payload;
        },
    },
});

export const { setConnectionLoading, setConnected, setStateName, setErrorInfo } = FSUIPCSlicer.actions;
export default FSUIPCSlicer.reducer;