import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    appName: string,
    conState: string,
    appParts: Array<string>,
}

const initialState: State = {
    appName: "737MTU FS Control",
    conState: "Connenction Status",
    appParts: [
        "FSUIPC Server -",
        "Phidgets -"
    ],
}

export const AppStartSlicer = createSlice({
    name: "AppStart",
    initialState,
    reducers: {},
});

export default AppStartSlicer.reducer;