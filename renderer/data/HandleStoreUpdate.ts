/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../store";

export var currentValueStateTree: object = {};
var getLatestStore = (state: any) => {return state;
}
export var handleStateChange = () =>{
    currentValueStateTree = getLatestStore(initializeStore.getState());    
    //console.log('currentValueStateTree :', currentValueStateTree);
    return currentValueStateTree;
}
var checkReduxStoreTree = () => {return handleStateChange();}

export default checkReduxStoreTree;