/* ================================================== Load MTU Services ==================================================
Import  modules */
import axios from 'axios';

import { initializeStore } from "../store";

import {loadFsuipcService} from './FSUIPC/LoadFsuipcService';
import generalTexts from './GeneralTexts';
import { setConnectionLoading, setConnected, setLabelConButton } from '../redux/appStartSlicer';
import { setFSUIPCConnected } from '../redux/FSUIPCSlicer';;
import { log } from 'console';

var loadMTUServices = (e: any) => {
    var targetButton = e.target.id;
    console.log('targetButton :', targetButton);
    if(targetButton === generalTexts.services["fsuipc"]) {
        //Common values for the app
            initializeStore.dispatch(setConnectionLoading(true));

        // Connect to services
            // FSUIPC
                // Just give the loading proccess to show
                setTimeout(() => {loadFsuipcService("connect");},2000);

            /* Phidgets Boards
                axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                    console.log(response);
                }).
                catch(error => {});
                */
               
    }
    if(targetButton === generalTexts.conButton["disconnect"]) {
        //Common values for the app
            initializeStore.dispatch(setConnected(false)); 
            initializeStore.dispatch(setLabelConButton(generalTexts.conButton["connect"]));
            
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