import VariousFSUIPCCommands from './FSUIPCCommandsObj';
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

var FSUIPCFunctions: any = {
    onopen: (serverInstance: any) => {
        serverInstance.onopen = () => {
            console.log('Connection Opened!');
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
            initializeStore.dispatch(setFSUIPCConnected(true));
            
            // If all services are connected = run and set these values to the store
            initializeStore.dispatch(setConnectionLoading(false));
            initializeStore.dispatch(setConnected(true)); 
            initializeStore.dispatch(setLabelConButton(generalTexts.conButton["disconnect"]));
        };
    },
    onclose: (serverInstance: any) => { 
        serverInstance.onclose = () => {
            console.log('Connection Closed!');
            initializeStore.dispatch(setConnectionInfo({ dataReceived: false,}));
            initializeStore.dispatch(setFSUIPCConnected(false)); 
            initializeStore.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
            initializeStore.dispatch(setLabelConButton(generalTexts.conButton["connect"]));
            serverInstance = null;
        };
    },
    onerror: (serverInstance: any) => {
        serverInstance.onerror = () => {

        };
    },
}

export var loadFSUIPCConInfo = (serverInstance: any) => {
    /*The following code will create a simple request with the command about.read. 
    This will get various information about the WebSocket Server and Flight Sim (if connected).
    This is a simple command that is just checking the connection is established */

    serverInstance.send(JSON.stringify(VariousFSUIPCCommands.startUp.read["about"]));
    serverInstance.onmessage = (msg: any) => {
        // parse the JCON string to a Javascript object
        var response = JSON.parse(msg.data);
        console.log('msg :', msg);
        console.log(response);
        if(response.success === true){
            setTimeout(() => {
                initializeStore.dispatch(setConnectionInfo({dataReceived: true, receivedData: response})); 
            }, 2000);
        }      
    }
};
export default FSUIPCFunctions;