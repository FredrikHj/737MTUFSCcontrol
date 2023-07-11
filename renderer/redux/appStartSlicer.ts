import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    appName: string,
    stateName: string,
    errorInfo: string,
    appParts: Array<string>,
}

const initialState: State = {
    appName: "737Motorized Throttle Unit Control",
    stateName: generalTexts.conStates.fsuipc.webService["notStarted"],
    errorInfo: "No Errors",
    appParts: [
        "FSUIPC Server -",
        "Phidgets -"
    ],
}

export const AppStartSlicer = createSlice({
    name: "AppStart",
    initialState,
    reducers: {
        setStateName: (state: State, action: PayloadAction<string>) => {
            state.stateName = action.payload;
        },
        setErrorInfo: (state: State, action: PayloadAction<string>) => {
            state.errorInfo = action.payload;
        },
    },
});
export const { setStateName, setErrorInfo } = AppStartSlicer.actions;
export default AppStartSlicer.reducer;