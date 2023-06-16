/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
import { store } from "../../renderer/store";
import { setConnectionLoading, setConnected, setStateName, setErrorInfo, setConnectionInfo, setTestObj} from '../redux/FSUIPCSlicer';
import generalTexts from './GeneralTexts'; 
//const phidget22 = require('phidget22');
import phidget22 from './Phidgets/Phidget22/phidget22';
import { testCommand } from './FSUIPC/RunCommandsResponse';
import { log } from 'console';
/*
import {
    setAutostorePickData,
    setPickDataIsFound,
    setAutostorePickChoosenDate
} from '../services/autostorePickSlicer';
*/

var fsuipcWs: any = null;
var runConServers: {fsuipc: any, phidgets: any} = {
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
    phidgets: () => {
        var connection = new phidget22.NetworkConnection(5661, "phidget_Fhj");
            connection.connect().then(function () {
		        console.log('connected');

                //ch.open().then(function (ch) {
                  //  console.log('channel open');
                //}).catch(function (err) {
                  //  console.log('failed to open the channel:' + err);
                //});
	        }).catch(function () {
		      
	        }
        );
        console.log(connection);
        
    },
}

var checkIfConnected: {fsuipc: any, phidgets: any}= {
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
    phidgets: () => {

    },
};
export const startServiceConnections = (service: string, runMode: string) =>{ 
    if(runMode === generalTexts.conButton["connect"]) return runConServers[service]("opened");  
    if(runMode === generalTexts.conButton["disconnect"]) return runConServers[service]("closed");  
}
export default fsuipcWs;