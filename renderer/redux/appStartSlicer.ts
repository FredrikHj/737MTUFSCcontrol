import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    appName: string,
    connectionLoading: boolean,
    connected: boolean,
    stateName: string,
    errorInfo: string,
    labelConButton: string,
    appParts: Array<string>,
}

const initialState: State = {
    appName: "737Motorized Throttle Unit Control",
    connectionLoading: false,
    connected: false,
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    labelConButton: generalTexts.conButton["connect"],
    appParts: [
        "FSUIPC Server -",
        "Phidgets -"
    ],
}

export const AppStartSlicer = createSlice({
    name: "AppStart",
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
        setLabelConButton: (state: State, action: PayloadAction<string>) => {
            state.labelConButton = action.payload;
        },
    },
});
export const { setConnectionLoading, setConnected, setStateName, setErrorInfo, setLabelConButton } = AppStartSlicer.actions;
export default AppStartSlicer.reducer;