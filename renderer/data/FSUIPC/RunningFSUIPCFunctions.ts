import { setFSUIPCConnected, setStateName, setErrorInfo, setConnectionInfo } from '../../redux/FSUIPCSlicer';
import VariousFSUIPCCommands from './FSUIPCCommandsObj';
import { initializeStore } from "../../store";
import generalTexts from '../GeneralTexts'; 

var FSUIPCFunctions: any = {
    loadFSUIPCConInfo: (serverInstance: any) => {
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
    },

}

export default FSUIPCFunctions;