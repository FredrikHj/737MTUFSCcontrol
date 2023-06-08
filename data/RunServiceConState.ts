/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
import { store } from "../store";
import { setConnectionLoading, setConnected, setStateName, setErrorInfo, setConnectionInfo, setTestObj} from '../redux/FSUIPCSlicer';
import generalTexts from './GeneralTexts'; 
import { testCommand } from './FSUIPC/RunCommandsResponse';
/*
import {
    setAutostorePickData,
    setPickDataIsFound,
    setAutostorePickChoosenDate
} from '../services/autostorePickSlicer';
*/

var fsuipcWs: any = null;
var runConServers: {fsuipc: any} = {
    fsuipc: (mode: string) => {
        console.log(mode);
        if(mode === "opened"){
            fsuipcWs = new WebSocket(`ws://localhost:2048/fsuipc/`, "fsuipc");
            store.dispatch(setConnectionLoading(true)); 
            
            if(fsuipcWs !== null){
                console.log('onopen :');
                    fsuipcWs.onopen = () => {
                        checkIfConnected.fsuipc(fsuipcWs);         
                    }
                    if(!fsuipcWs.onerror){
                        
                    }                    
            } else {
                fsuipcWs.onerror = function () {
                    store.dispatch(setConnected(false)); 
                    store.dispatch(setStateName(generalTexts.conStates.fsuipc.serverError["name"]));
                    store.dispatch(setErrorInfo(generalTexts.conStates.fsuipc.serverError["type"][0]));

                }
            }
        } 
        if(mode === "closed") {
            fsuipcWs.close();
            fsuipcWs.onclose = () => {
                store.dispatch(setConnectionInfo({})); 
                store.dispatch(setConnected(false)); 
                store.dispatch(setConnectionLoading(false)); 
                store.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["notStarted"]));
                store.dispatch(setTestObj({
                    received: false,
                    data: {},
                }));
                fsuipcWs = null;
            }
            
        }
    },
}
var checkIfConnected = {
    fsuipc: (serverInstance: any) => {
        /*The following code will create a simple request with the command about.read. 
        This will get various information about the WebSocket Server and Flight Sim (if connected).
        This is a simple command that is just checking the connection is established */

        var request = {
            command: 'about.read',
            name: 'about'
        };
    
        fsuipcWs.send(JSON.stringify(request));
        serverInstance.onmessage = (msg: any) => {
            // parse the JCON string to a Javascript object
            var response = JSON.parse(msg.data);
            console.log(response);
            if(response.success === true){
                setTimeout(() => {
                    store.dispatch(setConnectionInfo(response)); 
                    store.dispatch(setConnected(true)); 
                    store.dispatch(setConnectionLoading(false)); 
                    store.dispatch(setStateName(generalTexts.conStates.fsuipc.webService["started"]));
                    testCommand(fsuipcWs);
                }, 2000);
            }      
        };
    },
};
export const startServiceConnections = (runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runConServers["fsuipc"]("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runConServers["fsuipc"]("closed");  
}
export default fsuipcWs;