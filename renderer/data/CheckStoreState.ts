/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../store";
import checkServicesConnection from "./CheckServicesConnection";

export var currentValueStateTree: object = {};
var getLatestStore = (state: any) => {return state;
}
export var handleStateChange: any = () =>{
    currentValueStateTree = getLatestStore(initializeStore.getState());    
    //console.log('currentValueStateTree :', currentValueStateTree);
    return currentValueStateTree;
}
var checkReduxStoreTree = (returnKey: any) => {
    console.log(handleStateChange()[returnKey]);    

    if(returnKey === "everyOne") return handleStateChange();
    if(returnKey !== "everyOne") return handleStateChange()[returnKey];
    
}
export default checkReduxStoreTree;