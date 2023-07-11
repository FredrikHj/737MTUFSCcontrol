import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";
import { CSSOthersObjectForCSSObject } from '@mui/styled-engine';

interface State {
    name: string,
    phidgetsConnectionLoading: boolean,
    connected: boolean,
    labelConButton: string,
    stateName: string,
    errorInfo: string,
    connectionInfo: object,
}

const initialState: State = {
    name: "Phidgets",
    phidgetsConnectionLoading: false,
    connected: false,
    labelConButton: generalTexts.conButton["connect"],
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    connectionInfo: {
        dataReceived: false,
    },
};

export const PhidgetsSlicer = createSlice({
    name: "PhidgetsSlicer",
    initialState,
    reducers: {
        setPhidgetsConnectionLoading: (state: State, action: PayloadAction<boolean>) => {
            state.phidgetsConnectionLoading = action.payload;
        },
        setConnected: (state: State, action: PayloadAction<boolean>) => {
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

export const { setPhidgetsConnectionLoading, setConnected, setLabelConButton, setStateName, setErrorInfo, setConnectionInfo } = PhidgetsSlicer.actions;
export default PhidgetsSlicer.reducer;