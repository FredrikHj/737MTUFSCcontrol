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
import FSUIPCFunctions from './RunningFSUIPCFunctions';
var fsuipcInstance: any = null;

export var loadFsuipcService = (runMode: string) =>{
    // Initilize instance
    fsuipcInstance = new WebSocket(`ws://localhost:2048/fsuipc/`, "fsuipc");
    if(runMode === "connect"){
        fsuipcInstance.onopen = () =>{
            console.log('Connection Opened!');
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
            initializeStore.dispatch(setFSUIPCConnected(true));

  
        // If all services are connected = run and set these values to the store
            initializeStore.dispatch(setConnectionLoading(false));
            initializeStore.dispatch(setConnected(true)); 
            initializeStore.dispatch(setLabelConButton(generalTexts.conButton["disconnect"]));
            FSUIPCFunctions["loadFSUIPCConInfo"](fsuipcInstance);

        fsuipcInstance.onclose = () => {
            console.log('Connection Closed!');
            initializeStore.dispatch(setConnectionInfo({
                dataReceived: false,
            }));
            initializeStore.dispatch(setConnected(false)); 
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
            
            fsuipcInstance = null;
        }
    }
            
              
        if(!fsuipcInstance.onerror){
            
        }                    

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

/*
const startServiceConnections = (runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runServiceFsuipcConnection("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runServiceFsuipcConnection("closed");
}
*/
export default fsuipcInstance;