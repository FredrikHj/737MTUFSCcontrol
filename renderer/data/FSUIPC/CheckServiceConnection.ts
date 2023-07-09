/* ================================================== Redux Store updater ==================================================
Import  modules */
import { initializeStore } from "../../store";

import checkReduxStoreTree, {
} from "../CheckStoreState";
import {loadFsuipcService} from './LoadFsuipcService';
import generalTexts from '../GeneralTexts'; 


//initializeStore.subscribe(handleStateChange)
var checkServicesConnection = (service: string) =>{
  retryConnection(service);
}
var retryConnection = (service: string) => { 
  if (service === generalTexts.services["fsuipc"]) {
    var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");
    var serviceConnected: boolean = storeListenerServiceFSUIPC["FSUIPCConnected"];
    
    if (serviceConnected === false) {
      setTimeout(() => {
        console.log('Retry to Connnect!');
        setTimeout(() => {loadFsuipcService("connect");},2000);
        return retryConnection(service);
      }, 6000);
    }
  }
}

export default checkServicesConnection; //;