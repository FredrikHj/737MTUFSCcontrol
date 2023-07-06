import { initializeStore } from "../../store";

import {
  setFSUIPCConnected,
  setStateName,
  setErrorInfo,
  setConnectionInfo,
} from "../../redux/FSUIPCSlicer";
import {
  setConnectionLoading,
  setConnected,
  setLabelConButton,
} from "../../redux/appStartSlicer";

import generalTexts from '../GeneralTexts'; 
import FSUIPCFunctions, { loadFSUIPCConInfo } from './RunningFSUIPCFunctions';
var fsuipcInstance: any = null;

export var loadFsuipcService = (runMode: string) =>{
    // Initilize instance
    fsuipcInstance = new WebSocket(`ws://localhost:2048/fsuipc/`, "fsuipc");
    if(runMode === "connect"){
        FSUIPCFunctions.onopen(fsuipcInstance);

         
        setTimeout(() => {
            loadFSUIPCConInfo(fsuipcInstance);
        }, 4000); 
        FSUIPCFunctions.onclose(fsuipcInstance);   
        if(!fsuipcInstance.onerror){
    }                    
console.log('fsuipcInstance :', fsuipcInstance);
 
            //fsuipcInstance.onerror = function () {
            //initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.serverError["name"]));
            //initializeStore.dispatch(setErrorInfo(generalTexts.conStates.fsuipc.serverError["type"][0]));

    } 
    if(runMode === "disconnect") {
        fsuipcInstance.close();
        fsuipcInstance.onclose = () => {
            alert('Connection Closed!');
            console.log('Connection Closed!');
            initializeStore.dispatch(setConnectionInfo({})); 
            
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
            
            fsuipcInstance = null;
        }
    }
        fsuipcInstance.onclose = () => {
            console.log('onclose :', onclose);
            initializeStore.dispatch(setConnectionInfo({})); 
            
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
            
            fsuipcInstance = null;
        }
    
};

export default fsuipcInstance;