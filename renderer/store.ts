import { configureStore } from "@reduxjs/toolkit";
import { AppStartSlicer } from './redux/appStartSlicer';
import { FSUIPCSlicer } from './redux/FSUIPCSlicer';
import { PhidgetsSlicer } from './redux/PhidgetsSlicer';

export const initializeStore = configureStore({
    reducer: {
        appStart: AppStartSlicer.reducer,
        serviceFSUIPC: FSUIPCSlicer.reducer,    
        servicePHIDGETS: PhidgetsSlicer.reducer,    
    },
    devTools: true,
    preloadedState: undefined,
})

export type RootState = ReturnType<typeof initializeStore.getState>;
export type AppDispatch = typeof initializeStore.dispatch;
export default initializeStore;