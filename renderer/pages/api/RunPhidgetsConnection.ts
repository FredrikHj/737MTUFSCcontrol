/* ================================================== HeadBar ==================================================
Imports module */
const phidget22 = require('phidget22');
import { initializeStore } from "../../store";
import serverConfig from '../../data/Phidgets/Config';
import generalTexts from '../../data/GeneralTexts'; 
import PhidgetsInfoContainer from '../../data/Phidgets/PhidgetsInfoContainer';
import runBoards from './PhidgetsControl/PhidgetLED-64Adv(524938)';
import { AnyTxtRecord } from "dns";
import { log } from 'console';
export default function handler(req: any, res: any){
    //Requested controll strings
    var reqServiceTargetMode: string = req.query["mode"];  
    console.log('reqServiceTargetMode :', reqServiceTargetMode);
    if(reqServiceTargetMode === "connect") checkConnection(res, "opened");  
    if(reqServiceTargetMode === generalTexts.conButton["disconnect"]) return checkConnection(res, "closed");
    console.log('----------------------------');
}
async function runExample() {
    
}
const checkConnection = (sendRes: any, mode: string) =>{
    var connectionState: string = "";
    if(mode === "opened"){
        console.log('Incomming mode:', mode);
        var conn = new phidget22.NetworkConnection({
            hostname: serverConfig.hostname,
            port: serverConfig.port,
            name: "Phidget Server Connection",
            passwd: "",
            onAuthenticationNeeded: function() { return "password"; },
            onError: function(code: any, msg: any) { 
                var resultMsg: string = `Connection Error with messegnes: " ${msg} and Code: "${code}`;
                console.error("Connection Error:", msg); 
                sendRes.status(400).send({
                    hostname: serverConfig.hostname,
                    port: serverConfig.port,
                    messegnes: resultMsg,
                    error: true,
                    connect: false,
                })
                return resultMsg;
            },
            onConnect: function() { 
                var resultMsg: string = "NetworkServer is Connected";
                 
                console.log(resultMsg);
                sendRes.status(200).send({
                    hostname: serverConfig.hostname,
                    port: serverConfig.port,
                    messegnes: resultMsg,
                    error: false,
                    connect: true,
                })
            },
            onDisconnect: function() { console.log("Disconnected"); }
        });
        
        conn.onConnect(() => {
            console.log("state Connected: ");
        });
        conn.onError(() => {
           console.log("state Error: ");
        });
        console.log('resultMsg :', conn);
        //return connectionInfo;
    }
       /* setTimeout(() => {
            conn.connected === true && runBoards(mode);
            
        }, 2000);
        */
    
//    mode === "closed" && runBoards(mode);
}
var phidgetsInstance: any = null;

//export var serviceInstances: object = {phidgetsInstance};