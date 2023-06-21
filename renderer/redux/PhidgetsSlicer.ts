import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";
import { CSSOthersObjectForCSSObject } from '@mui/styled-engine';

interface State {
    name: string,
    phidgetsConnected: boolean,
    stateName: string,
    errorInfo: string,
    connectionInfo: object,
    testObj: {
        received: boolean,
        data: object,
    },
}

const initialState: State = {
    name: "Phidgets",
    phidgetsConnected: false,
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    connectionInfo: {},
    testObj: {
        received: false,
        data: {},
    },
};

export const PhidgetsSlicer = createSlice({
    name: "PhidgetsSlicer",
    initialState,
    reducers: {
        setPhidgetsConnected : (state: State, action: PayloadAction<boolean>) => {
            state.phidgetsConnected = action.payload;
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

export const { setPhidgetsConnected, setStateName, setErrorInfo, setConnectionInfo, setTestObj } = PhidgetsSlicer.actions;
export default PhidgetsSlicer.reducer;