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
        console.log('fsuipcInstance :', fsuipcInstance.readyState);
        if(fsuipcInstance.readyState === 0 || fsuipcInstance.readyState === 1){
            initializeStore.dispatch(setFSUIPCConnected(true));
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
            
            console.log('onopen :');

            fsuipcInstance.onopen = () =>{getFSUIPCConInfo(fsuipcInstance);}       
            if(!fsuipcInstance.onerror){
                
            }                    
        } 
        else {
                fsuipcInstance.onerror = function () {
                initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.serverError["name"]));
                initializeStore.dispatch(setErrorInfo(generalTexts.conStates.fsuipc.serverError["type"][0]));
            }
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