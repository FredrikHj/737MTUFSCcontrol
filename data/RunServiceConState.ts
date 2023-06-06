/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
import { store } from "../store";
import { setConnectionLoading, setConnected, setStateName, setErrorInfo } from '../redux/FSUIPCSlicer';
import { setFsuipcServer } from '../redux/ServerInstancesSlicer';
import generalTexts from './GeneralTexts'; 

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
            console.log('fsuipcWs :', fsuipcWs);
            checkIfConnected.fsuipc(fsuipcWs);
            
            if(fsuipcWs !== null){
                fsuipcWs.onopen = () => {
                    /*The following code will create a simple request with the command about.read. This will get various information about the WebSocket Server and Flight Sim (if connected).
                    This is a simple command that requires no extra properties.*/
                    var request = {
                        command: 'about.read',
                        name: 'about'
                    };
                    
                    store.dispatch(setConnectionLoading(true)); 
                    
                    fsuipcWs.send(JSON.stringify(request));
                    //store.dispatch(setConnected(true)); 
                    //store.dispatch(setStateName(generalTexts.conStates.state["started"]));              
                   
            
            
            
                }
            if(!fsuipcWs.onerror){
                
                }

            } else {
                fsuipcWs.onerror = function () {
                    store.dispatch(setConnected(false)); 
                    store.dispatch(setStateName(generalTexts.conStates.state.serverError["name"]));
                    store.dispatch(setErrorInfo(generalTexts.conStates.state.serverError["type"][0]));

                }
            }
            } 
            if(mode === "closed") {
                fsuipcWs.close();
                fsuipcWs.onclose = () => {
                    store.dispatch(setConnected(false)); 
                    store.dispatch(setStateName(generalTexts.conStates.state["notStarted"]));
                    fsuipcWs = null;
                }
            }
        },
}
var checkIfConnected = {
    fsuipc: (serverInstance: any) => {
        serverInstance.onmessage
        serverInstance.onmessage = (msg: any) => {
            // parse the JCON string to a Javascript object
            var response = JSON.parse(msg.data);
            console.log(response);
        };
    },
};

export const startServiceConnections = (runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runConServers["fsuipc"]("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runConServers["fsuipc"]("closed");  
    
}