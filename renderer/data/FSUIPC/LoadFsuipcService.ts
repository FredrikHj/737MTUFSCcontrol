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
import checkServicesConnection from "./CheckServiceConnection";


export var loadFsuipcService = (runMode: string) =>{
    // Initilize instance
        var fsuipcInstance: any = null;
        fsuipcInstance = new WebSocket(`ws://localhost:2048/fsuipc/`, "fsuipc");

    if(runMode === "connect"){
        fsuipcInstance.onopen = () => {
            FSUIPCFunctions["onOpen"]();
            loadFSUIPCConInfo(fsuipcInstance);      
        };
        fsuipcInstance.onclose = () => {
            FSUIPCFunctions["onClose"]();
            fsuipcInstance = null;
            checkServicesConnection(generalTexts.services["fsuipc"]);
        };
        fsuipcInstance.onerror = () => {
            FSUIPCFunctions["onError"]();
        };
    }
}