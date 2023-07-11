import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    name: string,
    fsuipcConnectionLoading: boolean,
    connected: boolean,
    labelConButton: string,
    stateName: string,
    errorInfo: string,
    connectionInfo: object,
}

const initialState: State = {
    name: "FSUIPC",
    fsuipcConnectionLoading: false,
    connected: false,
    labelConButton: generalTexts.conButton["connect"],
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    connectionInfo: {
        dataReceived: false,
    },
};

export const FSUIPCSlicer = createSlice({
    name: "FSUIPCSlicer",
    initialState,
    reducers: {
        setFsuipcConnectionLoading: (state: State, action: PayloadAction<boolean>) => {
            state.fsuipcConnectionLoading = action.payload;
        },
        setConnected : (state: State, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
        },
        setLabelConButton: (state: State, action: PayloadAction<string>) => {
            state.labelConButton = action.payload;
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

export const { setFsuipcConnectionLoading, setConnected, setLabelConButton, setStateName, setErrorInfo, setConnectionInfo } = FSUIPCSlicer.actions;
export default FSUIPCSlicer.reducer;