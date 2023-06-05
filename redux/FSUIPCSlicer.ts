import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generalTexts from "../data/GeneralTexts";

interface State {
    name: string,
    connected: boolean,
    stateName: string,
    instance: any,
}

const initialState: State = {
    name: "FSUIPC",
    connected: false,
    stateName: generalTexts.conStates.state["notStarted"],
    instance: null,
}

export const FSUIPCSlicer = createSlice({
    name: "FSUIPCSlicer",
    initialState,
    reducers: {
        setConnected : (state: State, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
        },
        setStateName: (state: State, action: PayloadAction<string>) => {
            state.stateName = action.payload;
        },
        setInstance: (state: State, action: PayloadAction<any>) => {
            state.instance = action.payload;
        },

    },
});

export const { setConnected, setStateName, setInstance } = FSUIPCSlicer.actions;
export default FSUIPCSlicer.reducer;