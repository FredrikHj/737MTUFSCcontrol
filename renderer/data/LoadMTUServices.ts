/* ================================================== Load MTU Services ==================================================
Import  modules */
import { initializeStore } from "../store";

import LoadFsuipcService from './FSUIPC/LoadFsuipcService';
import LoadPhidgetsService from './Phidgets/LoadPhidgetsService';
import generalTexts from './GeneralTexts';
import { setFsuipcConnectionLoading  } from '../redux/FSUIPCSlicer';
import { setPhidgetsConnectionLoading  } from '../redux/PhidgetsSlicer';

import { log } from 'console';

var loadMTUServices = (e: any) => {
    var targetButton = e.target.id;
    console.log('targetButton :', targetButton);
    if(targetButton === generalTexts.services["fsuipc"]) {       
        // Set the connectioLoading and Connect to services
            initializeStore.dispatch(setFsuipcConnectionLoading(true));
        
            // Just give the loading proccess to show
            setTimeout(() => {LoadFsuipcService("connect");},2000);
    }
    if(targetButton === generalTexts.services["phidgets"]) {
        // Set the connectioLoading and Connect to services
            initializeStore.dispatch(setPhidgetsConnectionLoading(true));


        //Phidgets Boards
            setTimeout(() => {LoadPhidgetsService("connect");},2000);
    }
               
    if(targetButton === generalTexts.conButton["disconnect"]) {
        //Common values for the app
            
        // FSUIPC
            //runServiceFsuipcConnection("closed");            
        
        // Phidgets Boards
            /*
            axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                console.log(response);
            }).
            catch(error => {});
            */
    }
}

export default loadMTUServices;