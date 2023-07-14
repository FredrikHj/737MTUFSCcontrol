/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../store";
import checkServicesConnection from "./FSUIPC/CheckServiceConnection";

export var currentValueStateTree: object = {};
var getLatestStore = (state: any) => {return state;
}
export var handleStateChange: any = () =>{
    currentValueStateTree = getLatestStore(initializeStore.getState());    
 
    return currentValueStateTree;
}
var checkReduxStoreTree = (returnKey: any) => {
 

    if(returnKey === "everyOne") return handleStateChange();
    if(returnKey !== "everyOne") return handleStateChange()[returnKey];
    
}
export default checkReduxStoreTree;