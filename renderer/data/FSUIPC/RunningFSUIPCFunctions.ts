import VariousFSUIPCCommands from './FSUIPCCommandsObj';
import { initializeStore } from "../../store";
import {
    setFsuipcConnectionLoading,
    setConnected,
    setLabelConButton,
    setStateName,
    setErrorInfo,
    setConnectionInfo,
} from "../../redux/FSUIPCSlicer";


import generalTexts from '../GeneralTexts'; 

var FSUIPCFunctions: any = {
    onOpen: () => {
 
        initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
        
        // If all services are connected = run and set these values to the store
        initializeStore.dispatch(setFsuipcConnectionLoading(false));
        initializeStore.dispatch(setConnected(true)); 
        initializeStore.dispatch(setLabelConButton(generalTexts.conButton["disconnect"]));
    },
    onClose: () => { 
 
        initializeStore.dispatch(setConnectionInfo({ dataReceived: false,}));
        initializeStore.dispatch(setConnected(false)); 
        initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
        initializeStore.dispatch(setLabelConButton(generalTexts.conButton["connect"]));
        
    },
    onError: () => {
         
    },
} 

export var loadFSUIPCConInfo = (fsuipcInstance: any) => {
    /*The following code will create a simple request with the command about.read. 
    This will get various information about the WebSocket Server and Flight Sim (if connected).
    This is a simple command that is just checking the connection is established */

    fsuipcInstance.send(JSON.stringify(VariousFSUIPCCommands.startUp.read["about"]));
    fsuipcInstance.onmessage = (msg: any) => {
        // parse the JSON string to a Javascript object
        var response = JSON.parse(msg.data);
 
 
        if(response.success === true){
            setTimeout(() => {
                initializeStore.dispatch(setConnectionInfo({dataReceived: true, receivedData: response})); 
            }, 2000);
        }      
    }
};
export default FSUIPCFunctions;