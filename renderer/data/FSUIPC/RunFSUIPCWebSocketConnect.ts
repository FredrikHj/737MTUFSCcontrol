import { initializeStore } from "../../store";

import {
  setFSUIPCConnected,
  setStateName,
  setErrorInfo,
  setConnectionInfo,
} from "../../redux/FSUIPCSlicer";
import generalTexts from '../GeneralTexts'; 
import getFSUIPCConInfo from './GetFSUIPCConInfo';
var fsuipcInstance: any = null;

export var runServiceFsuipcConnect = (runMode: string) =>{
    if(runMode === "opened"){
        fsuipcInstance = new WebSocket(`ws://localhost:2048/fsuipc/`, "fsuipc");
        console.log('WebSocket :', fsuipcInstance);
        // Check if the websocket is connected
            if(fsuipcInstance.onmessage !== null){
                initializeStore.dispatch(setFSUIPCConnected(true));
                initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
                
                console.log('onopen :');

                fsuipcInstance.onopen = () =>{getFSUIPCConInfo(fsuipcInstance);}       
                if(!fsuipcInstance.onerror){
                    
                }                    
                else {
                    fsuipcInstance.onerror = function () {
                        console.log('onerror :', onerror);
                        initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.serverError["name"]));
                        initializeStore.dispatch(setErrorInfo(generalTexts.conStates.fsuipc.serverError["type"][0]));
                    }
                }
            } else {
                initializeStore.dispatch(setFSUIPCConnected(false));
                initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["closed"]));
            }
    } 
    if(runMode === "closed") {
        fsuipcInstance.close();
        fsuipcInstance.onclose = () => {
            initializeStore.dispatch(setConnectionInfo({})); 
            
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
            
            fsuipcInstance = null;
        }
    }
};

/*
const startServiceConnections = (runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runServiceFsuipcConnection("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runServiceFsuipcConnection("closed");
}
*/
export default fsuipcInstance;