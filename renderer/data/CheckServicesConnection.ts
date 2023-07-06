/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../store";

import checkReduxStoreTree, {
} from "./CheckStoreState";

//initializeStore.subscribe(handleStateChange)
var checkServicesConnection = () =>{
  var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");
  console.log('storeStateTree :', storeListenerServiceFSUIPC);
  
  var isFSUIPCConnected: boolean = storeListenerServiceFSUIPC["FSUIPCConnected"];
  console.log('isFSUIPCConnected :', isFSUIPCConnected);
  //if(isFSUIPCConnected === true) setIfServicesConnect();
}

export default checkServicesConnection; //;