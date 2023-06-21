/* ================================================== HeadBar ==================================================
Imports module */
const phidget22 = require('phidget22');
import { initializeStore } from "../../store";
import { setConnectionLoading, setConnected, setStateName, setErrorInfo, setConnectionInfo, setTestObj} from '../../redux/FSUIPCSlicer';
import generalTexts from '../../data/GeneralTexts'; import PhidgetsInfoContainer from '../../data/Phidgets/PhidgetsInfoContainer';
import runBoards from './PhidgetsControl/PhidgetLED-64Adv(524938)';
export default function handler(req: any, res: any){
    //Requested controll strings
    var reqServiceTargetMode: string = req.query["mode"];  
    if(reqServiceTargetMode === generalTexts.conButton["connect"]) return checkConnection("opened");  
    if(reqServiceTargetMode === generalTexts.conButton["disconnect"]) return checkConnection("closed");
    console.log('----------------------------');
}
async function runExample() {
    
}
const checkConnection = async(mode: string) =>{
    console.log('Incomming mode:', mode);
    if(mode === "opened"){
        const conn = new phidget22.NetworkConnection(5661, 'localhost')
        await conn.connect();
        console.log('Is connected ?', conn.connected);
        setTimeout(() => {
            conn.connected === true && runBoards(mode);
            
        }, 2000);
    }
    mode === "closed" && runBoards(mode);
}
var phidgetsInstance: any = null;

export var serviceInstances: object = {phidgetsInstance};
