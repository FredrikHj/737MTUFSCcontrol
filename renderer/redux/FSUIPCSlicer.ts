import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    name: string,
    FSUIPCConnected: boolean,
    stateName: string,
    errorInfo: string,
    connectionInfo: object,
}

const initialState: State = {
    name: "FSUIPC",
    FSUIPCConnected: false,
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    connectionInfo: {},
};

export const FSUIPCSlicer = createSlice({
    name: "FSUIPCSlicer",
    initialState,
    reducers: {
        setFSUIPCConnected : (state: State, action: PayloadAction<boolean>) => {
            state.FSUIPCConnected = action.payload;
        },
        setStateName: (state: State, action: PayloadAction<string>) => {
            state.stateName = action.payload;
        },
        setErrorInfo: (state: State, action: PayloadAction<string>) => {
            state.errorInfo = action.payload;
        },
        setConnectionInfo: (state: State, action: PayloadAction<object>) => {
            state.connectionInfo = action.payload;
        },        
    },
});

export const { setFSUIPCConnected, setStateName, setErrorInfo, setConnectionInfo } = FSUIPCSlicer.actions;
export default FSUIPCSlicer.reducer;