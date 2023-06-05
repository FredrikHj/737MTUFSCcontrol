/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
import { store } from "../store";
import { setConnected, setStateName, setInstance } from '../redux/FSUIPCSlicer';
import { setFsuipcServer } from '../redux/ServerInstancesSlicer';
import generalTexts from './GeneralTexts'; 
import { log } from 'console';
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
            
        if(!fsuipcWs.onerror){
            fsuipcWs.onopen = () => {
                /*The following code will create a simple request with the command about.read. This will get various information about the WebSocket Server and Flight Sim (if connected).
                This is a simple command that requires no extra properties.*/
                var request = {
                    command: 'about.read',
                    name: 'about'
                };
                fsuipcWs.send(JSON.stringify(request));
                checkCon.fsuipc(fsuipcWs);
                 
                store.dispatch(setConnected(true)); 

                store.dispatch(setStateName(generalTexts.conStates.state["started"]));              
                store.dispatch(setInstance(fsuipcWs));
            }

        } else {
            fsuipcWs.onerror = function () {
                store.dispatch(setConnected(false)); 
                store.dispatch(setStateName(generalTexts.conStates.state.serverError["name"]));
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
var checkCon: {
    fsuipc: (instance: any) => {
     fsuipcWs.onmessage = (msg: any) => {
            // parse the JCON string to a Javascript object
            var response = JSON.parse(msg.data);
            console.log(response);
            
/*
            // If the response indicated success then we can proceed to process it 
            if (response.success) {
                // handle the response according to the command. 
                // could also use the name, or both.
                switch (response.command) {
                    case "about.read":
                        showVersion(response);
                        break;
                    default:
                        // Unhandled command
                        document.getElementById("errorMessage").innerText = "Unknown command: " + response.command;
                        break;
                }
            }
            else {
                // The request failed. Handle the errors here.
                // In this example we just display errors to the webpage
                var error = 'Error for ' + response.name + ' (' + response.command + '): ';
                error += response.errorCode + " - " + response.errorMessage;
                document.getElementById("errorMessage").innerText = error;
            }
            */
};
    },
}

export const startServiceConnections = (runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runConServers["fsuipc"]("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runConServers["fsuipc"]("closed");  
    
}