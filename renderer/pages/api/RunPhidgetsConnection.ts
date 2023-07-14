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
const checkConnection = (sendRes: any, mode: string) =>{
    var connectionState: string = "";
    if(mode === "opened"){
        console.log('Incomming mode:', mode);
        var conn = new phidget22.NetworkConnection({
            hostname: "localhost",
            port: 5661,
            name: "Phidget Server Connection",
            passwd: "",
            onAuthenticationNeeded: function() { return "password"; },
            onError: function(code, msg) { console.error("Connection Error:", msg); },
            onConnect: function() {
                var resultMsg: string = "";
                var connected: boolean = false;

                resultMsg = "Network Server Is Connected";
                console.log(resultMsg);
                connected = true;
                sendRes.status(200).send({
                    hostname: serverConfig.hostname,
                    port: serverConfig.port,
                    messegnes: resultMsg,
                    connect: connected,
                })
            },
            onDisconnect: function() { console.log("Disconnected"); }
        });

        conn.connect().catch(function(err) {
            var resultMsg: string = "";
            var connected: boolean = false;

            resultMsg = "Connection Error!";
            console.log(resultMsg);
            console.error( `${resultMsg} +\n ${err}`); 
            sendRes.status(401).send({
                hostname: serverConfig.hostname,
                port: serverConfig.port,
                messegnes: resultMsg,
                connect: connected,
            })
            console.error("Error during connect:", err);
        });


       
        //conn.onConnect() === "NetworkServer is Connected" && conn.onConnect();

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