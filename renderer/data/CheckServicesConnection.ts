/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../store";

import {
  setConnectionLoading,
  setConnected,
  setLabelConButton,
} from "../redux/appStartSlicer";
import generalTexts from './GeneralTexts'; 
  import checkReduxStoreTree, {
} from "./HandleStoreUpdate";



//initializeStore.subscribe(handleStateChange)
var checkServicesConnection = () =>{
  var storeStateTree: any = checkReduxStoreTree();
  console.log('storeStateTree :', storeStateTree);
  
  var isFSUIPCConnected: boolean = storeStateTree.serviceFSUIPC["FSUIPCConnected"];
  if(isFSUIPCConnected === true) setServicesConnect();
}
var setServicesConnect = () =>{    
  // If all services are connected = run set these values to the store
    initializeStore.dispatch(setConnectionLoading(false));
    initializeStore.dispatch(setConnected(true)); 
    initializeStore.dispatch(setLabelConButton(generalTexts.conButton["disconnect"]));
}
export default checkServicesConnection; //;