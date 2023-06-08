import { configureStore } from "@reduxjs/toolkit";
import { AppStartSlicer } from './redux/appStartSlicer';
import { FSUIPCSlicer } from './redux/FSUIPCSlicer';
import { PhidgetsSlicer } from './redux/PhidgetsSlicer';

export const store = configureStore({
    reducer: {
        appStart: AppStartSlicer.reducer,
        serviceFSUIPCS: FSUIPCSlicer.reducer,    
        servicePhidgets: PhidgetsSlicer.reducer,    
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;