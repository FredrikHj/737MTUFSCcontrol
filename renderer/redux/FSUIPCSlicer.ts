import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    name: string,
    connectionLoading: boolean,
    connected: boolean,
    stateName: string,
    errorInfo: string,
    connectionInfo: object,
    testObj: {
        received: boolean,
        data: object,
    },
}

const initialState: State = {
    name: "FSUIPC",
    connectionLoading: false,
    connected: false,
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "",
    connectionInfo: {},
    testObj: {
        received: false,
        data: {},
    },
};

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
        setConnectionInfo: (state: State, action: PayloadAction<object>) => {
            state.connectionInfo = action.payload;
        },        
        setTestObj: (state: State, action: PayloadAction<any>) => {
            state.testObj = action.payload;
        },
    },
});

export const { setConnectionLoading, setConnected, setStateName, setErrorInfo, setConnectionInfo, setTestObj } = FSUIPCSlicer.actions;
export default FSUIPCSlicer.reducer;